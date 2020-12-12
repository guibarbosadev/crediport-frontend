import React, {
    createContext,
    useCallback,
    useMemo,
    useState,
    useContext
} from 'react';
import { Report, ReportWithId } from '@Types/report';
import axios from 'axios';
import { API_URL } from '@Config';

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

    const addReport = useCallback(async (data: Report) => {
        try {
            const URL = `${API_URL}/report`;
            await axios.post(URL, data);
        } catch {
            // TODO show some error feedback
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
