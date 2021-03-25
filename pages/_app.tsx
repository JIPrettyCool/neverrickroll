import type { AppProps /*, AppContext */ } from 'next/app'
import '../styles/index.css'

const App = ({ Component, pageProps }: AppProps) => {
    return (
        <>
            <div className="flex flex-col h-screen justify-between items-center">
                <Component {...pageProps} />
            </div>
        </>
    );
}

export default App;