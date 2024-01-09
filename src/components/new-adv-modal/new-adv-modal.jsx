import { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { setAdvModal } from '../../store/slice/modal-slice';
import { usePostAdvMutation, useGetAdvQuery } from '../../store/adv-api';

import styles from './new-adv-modal.module.scss'

export const NewAdvModal = () => {
  const dispatch = useDispatch();

  const [postAdv] = usePostAdvMutation();
  const { refetch } = useGetAdvQuery();

  const [title, setTitle] = useState(null);
  const [description, setDescription] = useState(null);
  const [price, setPrice] = useState(null);

  const handlePostAdv = (event) => {
    event.preventDefault();
    postAdv({ title, description, price})
    .then(() => {
      dispatch(setAdvModal(false));
      refetch();
    });
  };

  const fileInputRef = useRef(null);

  const handleFileChange = (file) => {
    const formData = new FormData()
    if (file) {
      formData.append('file', file);
      console.log(file)
    }
  };

  return (
      <div className={styles.container_bg}>
        <div className={styles.modal__block}>
          <div className={styles.modal__content}>
            <h3 className={styles.modal__title}>Новое объявление</h3>
            <div className={styles.modal__btn_close} onClick={() => dispatch(setAdvModal(false))}>
              <div className={styles.modal__btn_close_line}></div>
            </div>
            <form
              className={styles.modal__form_newArt}
              id="formNewArt"
              action="#"
            >
              <div className={styles.form_newArt__block}>
                <label htmlFor="name">Название</label>
                <input
                  className={styles.form_newArt__input}
                  type="text"
                  name="name"
                  id="formName"
                  placeholder="Введите название"
                  onChange={(event) => setTitle(event.target.value)}
                />
              </div>
              <div className={styles.form_newArt__block}>
                <label htmlFor="text">Описание</label>
                <textarea
                  className={styles.form_newArt__area}
                  name="text"
                  id="formArea"
                  cols="auto"
                  rows="10"
                  placeholder="Введите описание"
                  onChange={(event) => setDescription(event.target.value)}
                ></textarea>
              </div>
              <div className={styles.form_newArt__block}>
                <p className={styles.form_newArt__p}>
                  Фотографии товара<span>не более 5 фотографий</span>
                </p>
                <div className={styles.form_newArt__bar_img}>
                  <div className={styles.form_newArt__img} onClick={() => fileInputRef.current.click()}>
                    <input 
                      type="file" 
                      id="upload_photo" 
                      ref={fileInputRef}
                      style={{ display: 'none' }}
                      onChange={(event) => {
                        event.preventDefault();
                        const file = event.target.files?.[0];
                        if (file) {
                          handleFileChange(file);
                        }
                      }}
                      />
                    <img src="" alt="" />
                    <div className={styles.form_newArt__img_cover}>
                    </div>
                  </div>

                  <div className={styles.form_newArt__img}>
                    <img src="" alt="" />
                    <div className={styles.form_newArt__img_cover}></div>
                  </div>
                  <div className={styles.form_newArt__img}>
                    <div className={styles.form_newArt__img_cover}></div>
                    <img src="" alt="" />
                  </div>
                  <div className={styles.form_newArt__img}>
                    <div className={styles.form_newArt__img_cover}></div>
                    <img src="" alt="" />
                  </div>
                  <div className={styles.form_newArt__img}>
                    <div className={styles.form_newArt__img_cover}></div>
                    <img src="" alt="" />
                  </div>
                </div>
              </div>
              <div className={styles.form_newArt__block}>
                <label htmlFor="price">Цена</label>
                <input
                  className={styles.form_newArt__input_price}
                  type="text"
                  name="price"
                  id="formName"
                  onChange={(event) => setPrice(event.target.value)}
                />
                <div className={styles.form_newArt__input_price_cover}></div>
              </div>
              <button
                className={styles.form_newArt__btn_pub}
                id="btnPublish"
                onClick={(event) => handlePostAdv(event)}
              >
                Опубликовать
              </button>
            </form>
          </div>
        </div>
      </div>
  );
};
