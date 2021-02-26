/**
 * Tudo que for repetir em todas as páginas, será inserido nesse arquivo.
 */
import '../styles/global.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp;