/* eslint-disable react/prop-types */
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useGetReviewsQuery, usePostReviewMutation } from '../../store/adv-api';
import { setReviewsModal } from '../../store/slice/modal-slice';
import { ReviewsList } from '../reviews-list';

import styles from  './reviews.module.scss';

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
      <div className={styles.container_bg}>
        <div className={styles.modal__block}>
          <div className={styles.modal__content}>
            <h3 className={styles.modal__title} onClick={() => dispatch(setReviewsModal(false))}>Отзывы</h3>
            <div
              className={styles.modal__btn_close}
              onClick={() => dispatch(setReviewsModal(false))}
            >
              <div className={styles.modal__btn_close_line}></div>
            </div>
            <div className={styles.modal__scroll}>
              {user ? (
                <form
                  className={styles.modal__form_newArt}
                  id="formNewArt"
                  action="#"
                >
                  <div className={styles.form_newArt__block}>
                    <label className={styles.form_newArt__label} htmlFor="text">Добавить отзыв</label>
                    <textarea
                      className={styles.form_newArt__area}
                      name="text"
                      id="formArea"
                      cols="auto"
                      rows="5"
                      placeholder="Напишите отзыв"
                      onChange={(event) => setText(event.target.value)}
                    ></textarea>
                  </div>
                  <button
                    className={styles.form_newArt__btn_pub}
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
  );
};
