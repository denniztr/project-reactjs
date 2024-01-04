import { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { setAdvModal } from '../../store/slice/modal-slice';
import { usePostAdvMutation, useGetAdvQuery } from '../../store/adv-api';

import './new-adv-modal.scss'

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
    <div className="modal-overlay">
      <div className="container-bg">
        <div className="modal__block">
          <div className="modal__content">
            <h3 className="modal__title">Новое объявление</h3>
            <div className="modal__btn-close" onClick={() => dispatch(setAdvModal(false))}>
              <div className="modal__btn-close-line"></div>
            </div>
            <form
              className="modal__form-newArt form-newArt"
              id="formNewArt"
              action="#"
            >
              <div className="form-newArt__block">
                <label htmlFor="name">Название</label>
                <input
                  className="form-newArt__input"
                  type="text"
                  name="name"
                  id="formName"
                  placeholder="Введите название"
                  onChange={(event) => setTitle(event.target.value)}
                />
              </div>
              <div className="form-newArt__block">
                <label htmlFor="text">Описание</label>
                <textarea
                  className="form-newArt__area"
                  name="text"
                  id="formArea"
                  cols="auto"
                  rows="10"
                  placeholder="Введите описание"
                  onChange={(event) => setDescription(event.target.value)}
                ></textarea>
              </div>
              <div className="form-newArt__block">
                <p className="form-newArt__p">
                  Фотографии товара<span>не более 5 фотографий</span>
                </p>
                <div className="form-newArt__bar-img">
                  <div className="form-newArt__img" onClick={() => fileInputRef.current.click()}>
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
                    <div className="form-newArt__img-cover">
                    </div>
                  </div>

                  <div className="form-newArt__img">
                    <img src="" alt="" />
                    <div className="form-newArt__img-cover"></div>
                  </div>
                  <div className="form-newArt__img">
                    <div className="form-newArt__img-cover"></div>
                    <img src="" alt="" />
                  </div>
                  <div className="form-newArt__img">
                    <div className="form-newArt__img-cover"></div>
                    <img src="" alt="" />
                  </div>
                  <div className="form-newArt__img">
                    <div className="form-newArt__img-cover"></div>
                    <img src="" alt="" />
                  </div>
                </div>
              </div>
              <div className="form-newArt__block block-price">
                <label htmlFor="price">Цена</label>
                <input
                  className="form-newArt__input-price"
                  type="text"
                  name="price"
                  id="formName"
                  onChange={(event) => setPrice(event.target.value)}
                />
                <div className="form-newArt__input-price-cover"></div>
              </div>
              <button
                className="form-newArt__btn-pub btn-hov02"
                id="btnPublish"
                onClick={(event) => handlePostAdv(event)}
              >
                Опубликовать
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
