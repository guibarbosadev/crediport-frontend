import React, { createContext, useCallback, useMemo, useState, useContext } from 'react';
import { Report } from '../types/report';
import axios from 'axios';
import { API_URL } from '../config';
import { message } from 'antd';

export interface ReportInterface {
    reports: Report[];
    getReports: () => void;
}

const ReportContext = createContext<ReportInterface>({
    reports: [],
    getReports: () => undefined
});

export const ReportProvider: React.FC = ({ children }) => {
    const [reports, setReports] = useState<Report[]>([]);
    const getReports = useCallback(() => {
        (async () => {
            try {
                const URL = `${API_URL}/report`;
                const { data } = await axios.get<Report[]>(URL);

                setReports(data);
            } catch {
                message.error('Oops, could not fetch transactions');
            }
        })();
    }, []);

    const context = useMemo<ReportInterface>(() => ({
        reports,
        getReports
    }), [reports]);

    return (
        <ReportContext.Provider value={context}>
            {children}
        </ReportContext.Provider>
    );
};

export const useReport = () => useContext<ReportInterface>(ReportContext);
