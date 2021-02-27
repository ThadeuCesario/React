import {createContext, useState, ReactNode} from 'react';

const ChallengesContext = createContext({} as ChallengesContextData);

interface ChallengesProviderProps {
  children: ReactNode;
}

interface ChallengesContextData {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
  levelUp: () => void;
  startNewChallenge: () => void;
}

function ChallengesProvider(props) {
  const {children}: ChallengesProviderProps = props;
  const [level, setLevel] = useState(1);
  const [currentExperience, setCurrentExperience] = useState(0);
  const [challengesCompleted, setChallengesCompleted] = useState(0);

  function levelUp() {
    setLevel(level + 1);
  }

  function startNewChallenge() {
    console.log('new challenge');
  }

  return (
    <ChallengesContext.Provider 
      value={
        {
          level,
          currentExperience,
          challengesCompleted,
          levelUp,
          startNewChallenge
        }
      }>
      {children}
    </ChallengesContext.Provider>
  )
}

export {ChallengesContext, ChallengesProvider};
