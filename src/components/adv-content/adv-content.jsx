/* eslint-disable react/prop-types */
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { LiaTruckLoadingSolid } from 'react-icons/lia';
import { AiOutlinePicture } from "react-icons/ai";
import { formatDistance } from 'date-fns';
import { ru } from 'date-fns/locale';
import { setReviewsModal, setEditModal } from '../../store/slice/modal-slice';
import { useDeleteAdvMutation, useGetAdvQuery } from '../../store/adv-api';
import styles from './adv-content.module.scss';

export const AdvContent = ({ data, isLoading }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [phone, showPone] = useState(false);
  const [selectedImage, setSelectedImage] = useState(data?.images[0]?.url);

  console.log(selectedImage)

  const user = useSelector((state) => state.user.user);
  const {refetch} = useGetAdvQuery();
  const [deleteAdv] = useDeleteAdvMutation();

  const handleDeleteAdv = async () => {
    deleteAdv(data.id)
      .unwrap()
      .then(() => {
        navigate('/');
        refetch();
      });
  };

  return (
    <>
      {isLoading ? (
        <LiaTruckLoadingSolid size={100} className="loader" />
      ) : (
        <>
          <div className={styles.artic__content}>
            <div className={styles.article__left}>
              <div className={styles.article__fill_img}>
                <div className={styles.article__img}>
                  { data.images[0]?.url ? (
                    <img
                    src={`http://localhost:8090/${data.images[0]?.url}` || selectedImage}
                  />
                  ) : (
                    <AiOutlinePicture size={50} className={styles.AiOutlinePicture}/>
                  ) }
                </div>
                <div className={styles.article__img_bar}>
                  {/* {[...Array(6)].map((_, index) => (
                    <div key={index} className="article__img-bar-div">
                      <img src="" alt="" />
                    </div>
                  ))} */}
                  {data.images?.map((el, index) => (
                    <div key={index} className={styles.article__img_bar_div} onClick={() => setSelectedImage(el.url)}>
                      <img src={`http://localhost:8090/${el.url}`} alt="" />
                    </div>
                  ))}
                </div>
                <div className={styles.article__img_bar_mob}>
                  {data.images?.map((el, index) => (
                    <div
                      key={index}
                      className={`img-bar-mob__circle${
                        index === 0 ? ' circle-active' : ''
                      }`}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
            <div className={styles.article__right}>
              <div className={styles.article__block}>
                <h3 className={styles.article__title}>{data.title}</h3>
                <div className={styles.article__info}>
                  <p className={styles.article__date}>
                    {formatDistance(new Date(data.created_on), Date.now(), {
                      locale: ru,
                    })}{' '}
                    назад
                  </p>
                  <p className={styles.article__city}>Санкт-Петербург</p>
                  <a
                    className={styles.article__link}
                    target="_blank"
                    onClick={() => dispatch(setReviewsModal())}
                  >
                    Отзывы
                  </a>
                </div>
                <p className={styles.article__price}>{data.price} ₽</p>
                {data && data.user_id === Number(user?.id) ? (
                  <div className={styles.article__buttons}>
                    <button className={styles.article__btn} onClick={() => dispatch(setEditModal())}>
                      Редактировать
                    </button>
                    <button
                      className={styles.article__btn}
                      onClick={handleDeleteAdv}
                    >
                      Снять с публикации
                    </button>
                  </div>
                ) : (
                  <button
                    className={styles.article__btn}
                    onClick={() => showPone(!phone)}
                  >
                    Показать телефон
                    {phone ? <span>{data?.user.phone}</span> : ''}
                  </button>
                )}
                <div className={styles.article__author}>
                  <div
                    className={styles.author__img}
                    onClick={() => navigate(`/seller/${data.user.id}`)}
                  >
                    <img
                      src={`http://localhost:8090/${data.user.avatar}`}
                      alt=""
                    />
                  </div>
                  <div className={styles.author__cont}>
                    <p className={styles.author__name}>{data.user.name}</p>
                    <p className={styles.author__about}>
                      Продает товары с {data.user.sells_from}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.main__container}>
            <h3 className={styles.main__title}>Описание товара</h3>
            <div className={styles.main__content}>
              <p className={styles.main__text}>{data.description}</p>
            </div>
          </div>
        </>
      )}
    </>
  );
};
