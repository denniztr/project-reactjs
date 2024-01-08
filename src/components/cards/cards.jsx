/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import { LiaTruckLoadingSolid } from "react-icons/lia";
import { AiOutlinePicture } from "react-icons/ai";
import { formatDistance } from 'date-fns';
import { ru } from 'date-fns/locale';

import './cards.scss';

export const CardsContent = ({ data, isLoading }) => {
  const navigate = useNavigate();

  return (
    <div className="main__content">
      <div className="content__cards cards">
        { isLoading ? (
          <LiaTruckLoadingSolid size={100} className="loader"/>
        ) : (
          data.map((card) => (
            <div className="cards__item" key={card.id}>
            <div className="cards__card card" onClick={() => navigate(`/adv/${card.id}`)}>
              <a>
                <div className="card__image">
                  { card.images[0]?.url ? (
                    <img alt='' src={`http://localhost:8090/${card.images[0]?.url}`}/>
                  ) : (
                    <AiOutlinePicture size={50} className="AiOutlinePicture"/>
                  ) }
                  {/* <img alt='' src={`http://localhost:8090/${card.images[0]?.url}`}/> */}
                  
                </div>
              </a>
              <div className="card__content">
                <a href="">
                  <h3 className="card__title">{card.title}</h3>
                </a>
                <p className="card__price">{card.price} ₽</p>
                <p className="card__place">{card.user.city}</p>
                <p className="card__date">{formatDistance(new Date(card.created_on), Date.now(), { locale: ru })} назад</p>
              </div>
            </div>
          </div>
          ))
        ) }
      </div>
    </div>
  );
};
