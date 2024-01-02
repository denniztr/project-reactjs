/* eslint-disable react/prop-types */
import { LiaTruckLoadingSolid } from "react-icons/lia";

import './cards.scss';

export const CardsContent = ({ data, isLoading }) => {
  console.log(isLoading)
  data && console.log(data)

  return (
    <div className="main__content">
      <div className="content__cards cards">
        { isLoading ? (
          <LiaTruckLoadingSolid size={100} className="loader"/>
        ) : (
          data.map((card) => (
            <div className="cards__item" key={card.id}>
            <div className="cards__card card">
              <a>
                <div className="card__image">
                  <img alt="" src={`http://localhost:8090/${card.images[0]?.url}`}/>
                </div>
              </a>
              <div className="card__content">
                <a href="">
                  <h3 className="card__title">{card.title}</h3>
                </a>
                <p className="card__price">{card.price} ₽</p>
                <p className="card__place">{card.user.city}</p>
                <p className="card__date">{card.created_on}</p>
              </div>
            </div>
          </div>
          ))
        ) }
      </div>
    </div>
  );
};
