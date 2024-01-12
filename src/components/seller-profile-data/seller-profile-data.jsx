/* eslint-disable react/prop-types */
import { useState } from 'react';
import styles from './seller-profile-data.module.scss';

export const SellerProfileData = ({ seller }) => {
  const [phone, showPhone] = useState(false);

  const handleHistoryBackClick = () => {
    window.history.back()
  }

  return (
    <>
      <h2 className={styles.main__h2} onClick={handleHistoryBackClick}>Профиль продавца</h2>
      <div className={styles.main__profile_sell}>
        <div className={styles.profile_sell__content}>
          <div className={styles.profile_sell__seller}>
            <div className={styles.seller__left}>
              <div className={styles.seller__img}>
                <a target="_self">
                  <img
                    src={seller && `http://localhost:8090/${seller.avatar}`}
                    alt=""
                  />
                </a>
              </div>
            </div>
            <div className={styles.seller__right}>
              <h3 className={styles.seller__title}>{seller && seller.name}</h3>
              <p className={styles.seller__city}>{seller && seller.city}</p>
              <p className={styles.seller__inf}>
                {' '}
                Продаёт с {seller && seller.sells_from}
              </p>
              <div className={styles.seller__img_mob_block}>
                <div className={styles.seller__img_mob}>
                  <a target="_self">
                    <img src={seller && `http://localhost:8090/${seller.avatar}`} alt="" />
                  </a>
                </div>
              </div>
              <button 
                className={styles.seller__btn}
                onClick={() => showPhone(!phone)}
              >
                  Показать телефон
                {/* <span>{seller && seller.phone}</span> */}
                {phone ? <span>{seller?.phone}</span> : ''}
              </button>
            </div>
          </div>
        </div>
      </div>
      <h3 className={styles.main__title}>Товары продавца</h3>
    </>
  );
};
