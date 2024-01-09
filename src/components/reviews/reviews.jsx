/* eslint-disable react/prop-types */
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useGetReviewsQuery, usePostReviewMutation } from '../../store/adv-api';
import { setReviewsModal } from '../../store/slice/modal-slice';
import { ReviewsList } from '../reviews-list';

// import './reviews.scss';

export const ReviewsComponent = ({ id }) => {
  const dispatch = useDispatch();

  const { data, isLoading, refetch } = useGetReviewsQuery(id);
  const [postReview] = usePostReviewMutation();

  const [text, setText] = useState('');

  const user = useSelector((state) => state.user.user);

  const handlePostReview = (event) => {
    event.preventDefault();
    postReview({ id: id, body: { text: text } }).then(() => {
      refetch();
    });
  };

  return (
    <div className="modal-overlay">
      <div className="container-bg">
        <div className="modal__block">
          <div className="modal__content">
            <h3 className="modal__title">Отзывы</h3>
            <div
              className="modal__btn-close"
              onClick={() => dispatch(setReviewsModal(false))}
            >
              <div className="modal__btn-close-line"></div>
            </div>
            <div className="modal__scroll">
              {user ? (
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
                      onChange={(event) => setText(event.target.value)}
                    ></textarea>
                  </div>
                  <button
                    className="form-newArt__btn-pub btn-hov02"
                    id="btnPublish"
                    onClick={(event) => handlePostReview(event)}
                  >
                    Опубликовать
                  </button>
                </form>
              ) : (
                <p style={{'paddingBottom': '50px', 'color': 'rgb(99, 99, 99)'}} >Авторизуйтесь чтобы добавить комментарий</p>
              )}
              {isLoading ? (
                'Загрузка комментариев...'
              ) : (
                <ReviewsList data={data} />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
