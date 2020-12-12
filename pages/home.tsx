import React from 'react';
import { useReport } from '@Context/report';
import { Report } from '@Types/report';
import { message } from 'antd';
import { AddReportBar } from '@Components/AddReportBar';

export const Home: React.FC = () => {
    const { reports, getReports, addReport } = useReport();
    const [isSubmitting, setIsSubmitting] = React.useState<boolean>(false);

    React.useEffect(() => {
        getReports();
    }, []);

    const handleSubmit = React.useCallback(async (values: Report) => {
        const hideLoading = message.loading('Carregando', 0);
        console.log('handleSubmit: ', handleSubmit);
        setIsSubmitting(true);
        await addReport({ ...values });
        setIsSubmitting(false);
        hideLoading();
        getReports();
    }, []);

    return (
        <div>
            <AddReportBar handleSubmit={handleSubmit} disabled={isSubmitting} />
            {reports.map((report) => (
                <div key={report._id}>{report.name}</div>
            ))}
        </div>
    );
};
