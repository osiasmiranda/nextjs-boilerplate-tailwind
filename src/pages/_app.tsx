import * as app from 'next/app'
import '../styles/globals.css'
import '@fontsource/dm-sans'

const App = ({ Component, pageProps }: app.AppProps) => {
  return <Component {...pageProps} />
}

export default App
