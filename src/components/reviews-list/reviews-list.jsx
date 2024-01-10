/* eslint-disable react/prop-types */
import { formatDistance } from 'date-fns';
import { ru } from 'date-fns/locale';

import styles from './reviews-list.module.scss'

export const ReviewsList = ({ data }) => {
  return (
    <div className={styles.modal__reviews}>
    <div className={styles.reviews__review}>
       { data.map((comment) => (
          <div className={styles.review__item} key={comment.id}>
            <div className={styles.review__left}>
              <div className={styles.review__img}>
                <img src={`http://localhost:8090/${comment.author.avatar}`} alt="" />
              </div>
            </div>
            <div className={styles.review__right}>
              <p className={styles.review__name} >
                {comment.author.name}<span>{formatDistance(new Date(comment.created_on), Date.now(), { locale: ru })} назад</span>
              </p>
              <h5 className={styles.review__title}>Комментарий</h5>
              <p className={styles.review__text}>
                {comment.text}
              </p>
            </div>
          </div>
        ))}
    </div>
  </div>
  )
}