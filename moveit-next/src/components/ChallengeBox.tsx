import styles from '../styles/components/ChallengeBox.module.css';

function ChallangeBox() {
    const hasActiveChallange = true;

    return(
        <div className={styles.challengeBoxContainer}>
            { hasActiveChallange ? (
                <div className={styles.challengeActive}>
                    <header>Ganhe 400 xp</header>

                    <main>
                        <img src="icons/body.svg" />
                        <strong>Novo desafio</strong>
                        <p>Levante e faça uma caminhada de 3 minutos.</p>
                    </main>

                    <footer>
                        <button type='button' className={styles.challengeFailedButton}>Falhei</button>
                        <button type='button' className={styles.challengedSucceededButton}>Completei</button>
                    </footer>
                </div>
            ) : (
                    <div className={styles.challangeNotActive}>
                        <strong>Finalize um ciclo para receber um desafio</strong>
                        <p>
                            <img src="icons/level-up.svg" alt="Ícone de Level Up"/>
                            Avance de level completando desafios
                        </p>
                    </div>
                )
            }
        </div>
    )
}

export default ChallangeBox;