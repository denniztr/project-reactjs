import SkyproLogo from '../../assets/icons/logo.png'
import SkyproLogoMobile from '../../assets/icons/logo-mob.png'
import styles from './search-query.module.scss';

export const SearchQuery = () => {
  return (
    <div className={styles.main__search}>
      <a className={styles.search__logo_link} target="_blank">
        <img className={styles.search__logo_img} alt="logo" src={SkyproLogo} />
      </a>
      <a className={styles.search__logo_mob_link} target="_blank">
        <img className={styles.search__logo_mob_img} alt="logo" src={SkyproLogoMobile} />
      </a>
      <form className={styles.search__form} action="#">
        <input
          className={styles.search__text}
          type="search"
          placeholder="Поиск по объявлениям"
          name="search"
        />
        <input
          className={styles.search__text_mob}
          type="search"
          placeholder="Поиск"
          name="search-mob"
        />
        <button className={styles.search__btn}>Найти</button>
      </form>
    </div>
  );
};
