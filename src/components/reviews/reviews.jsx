/* eslint-disable react/prop-types */
import { useDispatch } from 'react-redux';
import { useGetReviewsQuery } from '../../store/adv-api';
import { setReviewsModal } from '../../store/slice/modal-slice';
import { ReviewsList } from '../reviews-list';

import './reviews.scss';

export const ReviewsComponent = ({ id }) => {
  const dispatch = useDispatch();
  const { data, isLoading } = useGetReviewsQuery(id);

  return (
    <div className="modal-overlay">
    <div className="container-bg">
      <div className="modal__block">
        <div className="modal__content">
          <h3 className="modal__title">Отзывы</h3>
          <div className="modal__btn-close" onClick={() => dispatch(setReviewsModal(false))}>
            <div className="modal__btn-close-line"
            ></div>
          </div>
          <div className="modal__scroll">
              <form
                className="modal__form-newArt form-newArt"
                id="formNewArt"
                action="#"
              >
                <div className="form-newArt__block">
                  <label htmlFor="text">Добавить отзыв</label>
                  <textarea
                    className="form-newArt__area"
                    name="text"
                    id="formArea"
                    cols="auto"
                    rows="5"
                    placeholder="Напишите отзыв"
                  ></textarea>
                </div>
                <button
                  className="form-newArt__btn-pub btn-hov02"
                  id="btnPublish"
                >
                  Опубликовать
                </button>
              </form>
            { isLoading ? 'Загрузка комментариев...' : <ReviewsList data={data}/> }
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}