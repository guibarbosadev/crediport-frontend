import React, {
    createContext,
    useCallback,
    useMemo,
    useState,
    useContext
} from 'react';
import { Report, ReportWithId } from '@Types/report';
import axios from 'axios';
import parse from 'date-fns/parse';
import format from 'date-fns/format';
import { notification } from 'antd';
import { API_URL } from '@Config';
import { parseCurrency } from '@Helpers/';

export interface ReportInterface {
    reports: ReportWithId[];
    getReports: () => Promise<void>;
    addReport: (data: Report) => Promise<void>;
}

const ReportContext = createContext<ReportInterface>({
    reports: [],
    getReports: () => Promise.resolve(),
    addReport: () => Promise.resolve()
});

export const ReportProvider: React.FC = ({ children }) => {
    const [reports, setReports] = useState<ReportWithId[]>([]);
    const getReports = useCallback(async () => {
        try {
            const URL = `${API_URL}/report`;
            const { data } = await axios.get<ReportWithId[]>(URL);

            setReports(data);
        } catch {
            // TODO show some error feedback
        }
    }, []);

    const addReport = useCallback(async (report: Report) => {
        try {
            const parsedDate = parse(report.date, 'dd/MM/yyyy', new Date());
            const date = format(parsedDate, 'yyyy-MM-dd');
            const value = parseCurrency(report.value);
            const parsedReport: Report = { ...report, date, value };
            const URL = `${API_URL}/report`;

            await axios.post(URL, parsedReport);
        } catch (error) {
            console.log('error: ', error, report);
            notification.error({ message: 'Não foi possível lançar o gasto.' });
        }
    }, []);

    const context = useMemo<ReportInterface>(
        () => ({
            reports,
            getReports,
            addReport
        }),
        [reports]
    );

    return (
        <ReportContext.Provider value={context}>
            {children}
        </ReportContext.Provider>
    );
};

export const useReport = () => useContext<ReportInterface>(ReportContext);
