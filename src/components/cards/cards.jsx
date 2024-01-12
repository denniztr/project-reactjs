/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import { LiaTruckLoadingSolid } from "react-icons/lia";
import { AiOutlinePicture } from "react-icons/ai";
import { formatDistance } from 'date-fns';
import { ru } from 'date-fns/locale';

import styles from './cards.module.scss';

export const CardsContent = ({ data, isLoading }) => {
  const navigate = useNavigate();

  return (
    <div className={styles.main__content}>
      <div className={styles.cards}>
        { isLoading ? (
          <LiaTruckLoadingSolid size={100} className={styles.loader} />
        ) : (
          data.map((card) => (
            <div className={styles.cards__item} key={card.id}>
            <div className={styles.card} onClick={() => navigate(`/adv/${card.id}`)}>
              <a>
                <div className={styles.card__image}>
                  { card.images[0]?.url ? (
                    <img alt='' src={`http://localhost:8090/${card.images[0]?.url}`}/>
                  ) : (
                    <AiOutlinePicture size={50} className={styles.AiOutlinePicture} />
                  ) }
                  {/* <img alt='' src={`http://localhost:8090/${card.images[0]?.url}`}/> */}
                  
                </div>
              </a>
              <div className={styles.card__content}>
                <a href="">
                  <h3 className={styles.card__title}>{card.title}</h3>
                </a>
                <p className={styles.card__price}>{card.price} ₽</p>
                <p className={styles.card__place}>{card.user.city}</p>
                <p className={styles.card__date}>{formatDistance(new Date(card.created_on), Date.now(), { locale: ru })} назад</p>
              </div>
            </div>
          </div>
          ))
        ) }
      </div>
    </div>
  );
};
