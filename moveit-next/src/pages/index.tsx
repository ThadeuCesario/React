import CompletedChallanges from "../components/CompletedChallanges";
import Countdown from "../components/Countdown";
import ExpirienceBar from "../components/ExpirienceBar";
import Profile from "../components/Profile";
import Head from 'next/head';
import styles from '../styles/Pages/Home.module.css';
import ChallangeBox from "../components/ChallengeBox";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Início | move.it</title>
      </Head>
      <ExpirienceBar />

      <section>
        <div>
          <Profile />
          <CompletedChallanges />
          <Countdown />
        </div>
        <div>
          <ChallangeBox />
        </div>
      </section>
    </div>
  )
}
