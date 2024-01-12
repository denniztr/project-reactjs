/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import SkyproLogo from '../../assets/icons/logo.png'
import SkyproLogoMobile from '../../assets/icons/logo-mob.png'
import { setFilteredData } from '../../store/slice/adv-slice';
import styles from './search-query.module.scss';

export const SearchQuery = ({ data }) => {
  const dispatch = useDispatch();

  const [searchText, setSearchText] = useState('');
  const [searchTextMob, setSearchTextMob] = useState('');

  const handleSearch = (event) => {
    event.preventDefault();
    const results = data.filter(item => item.title.toLowerCase().includes(searchText.toLowerCase()));
    dispatch(setFilteredData(results))
  }

  useEffect(() => {
    if (data) {
      setTimeout(() => {
        const results = data.filter(item => item.title.toLowerCase().includes(searchTextMob.toLowerCase()));
        dispatch(setFilteredData(results));
      }, 500);
      clearTimeout()
    }
  }, [data, dispatch, searchTextMob])

  useEffect(() => {
    searchText === '' && dispatch(setFilteredData(data))
  }, [data, dispatch, searchText])

  
  return (
    <div className={styles.main__search}>
      <a className={styles.search__logo_link} target="_blank">
        <img className={styles.search__logo_img} alt="logo" src={SkyproLogo} />
      </a>
      <a className={styles.search__logo_mob_link} target="_blank">
        <img className={styles.search__logo_mob_img} alt="logo" src={SkyproLogoMobile} />
      </a>
      <form className={styles.search__form} action="#" onSubmit={handleSearch}>
        <input
          className={styles.search__text}
          type="search"
          placeholder="Поиск по объявлениям"
          name="search"
          defaultValue={searchText}
          onChange={(event) => setSearchText(event.target.value)}
        />
        <input
          className={styles.search__text_mob}
          type="search"
          placeholder="Поиск"
          name="search-mob"
          onChange={(event) => setSearchTextMob(event.target.value)}
        />
        <button className={styles.search__btn}>Найти</button>
      </form>
    </div>
  );
};
