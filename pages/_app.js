import GlobalStyle from '../styles/global'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle/>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
