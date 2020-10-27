import Document, { Html, Head, Main, NextScript } from "next/document";
import { AuthProvider } from "providers/auth";


export default class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head />
                <body>
                    <div className="max-auto px-5 pt-20 mt-5 mb-20">
                        <AuthProvider>
                            <Main />
                        </AuthProvider>
                    </div>
                    <NextScript />
                </body>
            </Html>
        );
    }
}
