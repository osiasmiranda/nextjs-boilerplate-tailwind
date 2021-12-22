import * as app from 'next/app'
import '../styles/globals.css'

const App = ({ Component, pageProps }: app.AppProps) => {
  return <Component {...pageProps} />
}

export default App
