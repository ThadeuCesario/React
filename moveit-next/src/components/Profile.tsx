/**
 * Todos os arquivos inseridos dentro da pasta public, são tornados públicos
 * Por isso, consigo acessá-los diretamente igual a imagem level.svg
 */

import styles from '../styles/components/Profile.module.css';

const Profile = props => {
  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/thadeucesario.png" alt="Thadeu Cesário foto"/>
      <div>
        <strong>Thadeu Cesário</strong>
        <p>
          <img src="icons/level.svg" alt="Level icon"/>
          Level 1
        </p>
      </div>
    </div>
  );
}

export default Profile;