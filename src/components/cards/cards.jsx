import { CiImageOff } from "react-icons/ci";
import './cards.scss';

export const CardsContent = () => {
  return (
    <div className="main__content">
      <div className="content__cards cards">
        <div className="cards__item">
          <div className="cards__card card">
            <a>
              <div className="card__image">
                {/* <img alt=""/> */}
                <CiImageOff style={{'position': 'absolute', 'top': '45%', 'left': '45%'}}/>
              </div>
            </a>
            <div className="card__content">
              <a href="">
                <h3 className="card__title">Заголовок</h3>
              </a>
              <p className="card__price">5000 рублей</p>
              <p className="card__place">Санкт Петербург</p>
              <p className="card__date">15 декабря 2023</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
