import SkyproLogo from '../../assets/icons/logo.png'
import './search-query.scss';

export const SearchQuery = () => {
  return (
    <div className="main__search search">
      <a className="search__logo-link" target="_blank">
        <img className="search__logo-img" alt="logo" src={SkyproLogo} />
      </a>
      <a className="search__logo-mob-link" target="_blank">
        <img className="search__logo-mob-img" alt="logo"/>
      </a>
      <form className="search__form" action="#">
        <input
          className="search__text"
          type="search"
          placeholder="Поиск по объявлениям"
          name="search"
        />
        <input
          className="search__text-mob"
          type="search"
          placeholder="Поиск"
          name="search-mob"
        />
        <button className="search__btn btn-hov02">Найти</button>
      </form>
    </div>
  );
};
