/**
 * Tudo que for repetir em todas as páginas, será inserido nesse arquivo.
 */
import '../styles/global.css';
import {ChallengesContext} from '../contexts/ChallengesContext';

function MyApp({ Component, pageProps }) {
  return (
    <ChallengesContext.Provider>
      <Component {...pageProps} />
    </ChallengesContext.Provider>
  )
}

export default MyApp;