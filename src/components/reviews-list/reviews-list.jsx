/* eslint-disable react/prop-types */
import { formatDistance } from 'date-fns';
import { ru } from 'date-fns/locale';

import './reviews-list.scss'

export const ReviewsList = ({ data }) => {
  return (
    <div className="modal__reviews reviews">
    <div className="reviews__review review">
       { data.map((comment) => (
          <div className="review__item" key={comment.id}>
            <div className="review__left">
              <div className="review__img">
                <img src={`http://localhost:8090/${comment.author.avatar}`} alt="" />
              </div>
            </div>
            <div className="review__right">
              <p className="review__name font-t">
                {comment.author.name}<span>{formatDistance(new Date(comment.created_on), Date.now(), { locale: ru })} назад</span>
              </p>
              <h5 className="review__title font-t">Комментарий</h5>
              <p className="review__text font-t">
                {comment.text}
              </p>
            </div>
          </div>
        ))}
    </div>
  </div>
  )
}