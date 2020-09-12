import React from 'react';
import { NextPage } from 'next';
import { ReportProvider } from '../src/context/report';
import { Home } from './home';

const App: NextPage = () => {
    return (
        <ReportProvider>
            <Home />
        </ReportProvider>
    );
};

export default App;
