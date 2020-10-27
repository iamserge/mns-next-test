import App from "next/app";
import Head from "next/head";
import "../styles/main.css";

export default class MyApp extends App {
    render() {
        const { Component, pageProps } = this.props;

        return (
            <>
                <Head>
                    <title>M&amp;S Test</title>
                    <meta name="description" content="M&amp;S Test Shop" />
                    <link rel="icon" type="image/x-icon" href="/static/favicon.ico" />
                    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap" rel="stylesheet"></link>
                    <link href="https://fonts.googleapis.com/css2?family=Open+Sans+Condensed:wght@300;700&display=swap" rel="stylesheet"></link>
                </Head>
                <Component {...pageProps} />
            </>
        );
    }
}
