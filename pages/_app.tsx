import '@Styles/global.scss';
import { theme } from '@Theme';
import { ThemeProvider } from 'styled-components';

interface IParams {
    Component: any;
    pageProps: any;
}

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }: IParams) {
    return (
        <ThemeProvider theme={theme}>
            <div
                style={{
                    width: '100%',
                    maxWidth: 1060,
                    margin: '100px auto 0'
                }}
            >
                <Component {...pageProps} />
            </div>
        </ThemeProvider>
    );
}
