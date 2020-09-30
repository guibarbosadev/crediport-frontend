export interface Report {
    name: string;
    value: number;
    date: string;
    category: string;
}

export interface ReportWithId extends Report {
    _id: string;
}
