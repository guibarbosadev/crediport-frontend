import React, { useEffect } from 'react';
import { useReport } from '../src/context/report';

export const Home: React.FC = () => {
    const { reports, getReports } = useReport();

    useEffect(getReports, []);

    return (
        <div>
            {reports.map((report) => (
                <div key={report._id}>{report.name}</div>
            ))}
        </div>
    );
};
