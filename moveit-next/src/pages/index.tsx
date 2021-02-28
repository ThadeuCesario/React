import CompletedChallanges from "../components/CompletedChallanges";
import Countdown from "../components/Countdown";
import ExpirienceBar from "../components/ExpirienceBar";
import Profile from "../components/Profile";
import Head from 'next/head';
import {GetServerSideProps} from 'next';
import styles from '../styles/Pages/Home.module.css';
import ChallangeBox from "../components/ChallengeBox";
import { CountdownProvider } from '../contexts/CountdownContext';
import {ChallengesProvider} from '../contexts/ChallengesContext';

interface HomeProps {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}

export default function Home(props: HomeProps) {
  const {level, currentExperience, challengesCompleted} = props;
  return (
    <ChallengesProvider
      level={level}
      currentExperience={currentExperience}
      challengesCompleted={challengesCompleted}
    >
    <div className={styles.container}>
      <Head>
        <title>Início | move.it</title>
      </Head>
      <ExpirienceBar />

      <CountdownProvider>
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
      </CountdownProvider>
    </div>
    </ChallengesProvider>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const {level, currentExperience, challengesCompleted} = ctx.req.cookies;
  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted),
    }
  }
}