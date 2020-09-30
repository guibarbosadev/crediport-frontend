import React, { useState, useEffect, useCallback } from 'react';
import { useReport } from '../src/context/report';
import { Report } from '../src/types/report';
import { format } from "date-fns";
import { message } from 'antd';

const today = format(new Date(), 'yyyy-MM-dd');

export const Home: React.FC = () => {
    const { reports, getReports, addReport } = useReport();
    const [reportValue, setReportValue] = useState<string>("");
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
    const [values, setValues] = useState<Report>({
        category: "",
        date: today,
        name: "",
        value: 0
    });

    useEffect(() => {
        getReports();
    }, []);

    const handleSubmit = useCallback(async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const hideLoading = message.loading("Carregando", 0);
        setIsSubmitting(true);
        await addReport({
            ...values,
            value: Number(reportValue)
        });
        setIsSubmitting(false);
        hideLoading();
        getReports();
    }, [reports, values, reportValue]);

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input placeholder="Batata frita" value={values.name} onChange={(e) => setValues({ ...values, name: e.target.value })} />
                <input placeholder="Guloseima" value={values.category} onChange={(e) => setValues({ ...values, category: e.target.value })} />
                <input placeholder={today} value={values.date} onChange={(e) => setValues({ ...values, date: e.target.value })} />
                <input placeholder="5.00" value={reportValue} onChange={(e) => setReportValue(e.target.value)} />
                <button type="submit" disabled={isSubmitting}>Adicionar</button>
            </form>

            {
                reports.map((report) => (
                    <div key={report._id}>{report.name}</div>
                ))
            }
        </div >
    );
};
