import CompletedChallanges from "../components/CompletedChallanges";
import Countdown from "../components/Countdown";
import ExpirienceBar from "../components/ExpirienceBar";
import Profile from "../components/Profile";

import styles from '../styles/Pages/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <ExpirienceBar />

      <section>
        <div>
          <Profile />
          <CompletedChallanges />
          <Countdown />
        </div>
        <div></div>
      </section>
    </div>
  )
}
