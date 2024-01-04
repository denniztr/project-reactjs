/* eslint-disable react/prop-types */
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { LiaTruckLoadingSolid } from 'react-icons/lia';
import { formatDistance } from 'date-fns';
import { ru } from 'date-fns/locale';
import { setReviewsModal, setEditModal } from '../../store/slice/modal-slice';
import { useDeleteAdvMutation, useGetAdvQuery } from '../../store/adv-api';
import './adv-content.scss';

export const AdvContent = ({ data, isLoading }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [phone, showPone] = useState(false);

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
          <div className="artic__content article">
            <div className="article__left">
              <div className="article__fill-img">
                <div className="article__img">
                  <img
                    src={`http://localhost:8090/${data.images[0]?.url}`}
                    alt=""
                  />
                </div>
                <div className="article__img-bar">
                  {[...Array(6)].map((_, index) => (
                    <div key={index} className="article__img-bar-div">
                      <img src="" alt="" />
                    </div>
                  ))}
                </div>
                <div className="article__img-bar-mob img-bar-mob">
                  {[...Array(5)].map((_, index) => (
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
            <div className="article__right">
              <div className="article__block">
                <h3 className="article__title title">{data.title}</h3>
                <div className="article__info">
                  <p className="article__date">
                    {formatDistance(new Date(data.created_on), Date.now(), {
                      locale: ru,
                    })}{' '}
                    назад
                  </p>
                  <p className="article__city">Санкт-Петербург</p>
                  <a
                    className="article__link"
                    target="_blank"
                    onClick={() => dispatch(setReviewsModal())}
                  >
                    23 отзыва
                  </a>
                </div>
                <p className="article__price">{data.price} ₽</p>
                {data && data.user_id === Number(user?.id) ? (
                  <div className="article__buttons">
                    <button className="article__btn btn-hov02" onClick={() => dispatch(setEditModal())}>
                      Редактировать
                    </button>
                    <button
                      className="article__btn btn-hov02"
                      onClick={handleDeleteAdv}
                    >
                      Снять с публикации
                    </button>
                  </div>
                ) : (
                  <button
                    className="article__btn btn-hov02"
                    onClick={() => showPone(!phone)}
                  >
                    Показать телефон
                    {phone ? <span>{data?.user.phone}</span> : ''}
                  </button>
                )}
                {/* <button className="article__btn btn-hov02" onClick={() => showPone(!phone)}>
              Показать телефон 
              { phone ? (<span>{data.user.phone}</span>) : '' }
            </button> */}

                <div className="article__author author">
                  <div
                    className="author__img"
                    onClick={() => navigate(`/seller/${data.user.id}`)}
                  >
                    <img
                      src={`http://localhost:8090/${data.user.avatar}`}
                      alt=""
                    />
                  </div>
                  <div className="author__cont">
                    <p className="author__name">{data.user.name}</p>
                    <p className="author__about">
                      Продает товары с {data.user.sells_from}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="main__container">
            <h3 className="main__title title">Описание товара</h3>
            <div className="main__content">
              <p className="main__text">{data.description}</p>
            </div>
          </div>
        </>
      )}
    </>
  );
};
