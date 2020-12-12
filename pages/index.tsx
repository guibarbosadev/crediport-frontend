import React from 'react';
import { NextPage } from 'next';
import { ReportProvider } from '@Context/report';
import { Home } from '@Pages/home';

const App: NextPage = () => {
    return (
        <ReportProvider>
            <Home />
        </ReportProvider>
    );
};

export default App;
