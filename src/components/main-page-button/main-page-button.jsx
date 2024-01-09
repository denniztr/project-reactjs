import { Link } from 'react-router-dom';
import SkyproLogo from '../../assets/icons/logo.png';

import styles from './main-page-button.module.scss';

export const NavigateToMainPage = () => {
  return (
    <div className={styles.main__container}>
      <div className={styles.main__menu}>
        <a className={styles.menu__logo_link} target="_blank">
          <img className={styles.menu__logo_img} src={SkyproLogo} alt="logo" />
        </a>
        <form className={styles.menu__form} action="#">
          <Link to="/">
            <button 
            // className="menu__btn btn-hov-02" id="btnGoBack" разобраться как добавить дополнительный класс
            className={`${styles.menu__btn} btn-hov-02`}id="btnGoBack"
            >
              Вернуться на главную
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};
