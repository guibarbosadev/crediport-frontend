import '@Styles/global.scss';

interface IParams {
    Component: any;
    pageProps: any;
}

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }: IParams) {
    return <Component {...pageProps} />;
}
