/* eslint-disable react/prop-types */
import { useState, useRef } from 'react';
import { useDispatch } from 'react-redux'
import { setEditModal } from '../../store/slice/modal-slice';
import { usePatchAdvMutation, usePostImageMutation } from '../../store/adv-api';
import { MdOutlineDelete } from "react-icons/md";

import './edit-adv-modal.scss'

export const EditAdvertisementComponent = ({ data, refetch }) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState(data.title)
  const [description, setDescription] = useState(data.description)
  const [price, setPrice] = useState(data.price)

  const [patchAdv] = usePatchAdvMutation();
  const [postImage] = usePostImageMutation();

  const handleSaveChangesClick = (event) => {
    event.preventDefault();
    patchAdv({ id: data.id, body: { title, description, price }})
    .then((res) => {
      console.log(res);
      refetch();
      dispatch(setEditModal(false));
    })
  };

  const fileInputRef = useRef(null);

  const handleFileChange = (file) => {
    const formData = new FormData()
    if (file) {
      formData.append('file', file);
      console.log(formData)
      postImage({ id: data.id, formData})
      .then((res) => {
        console.log(res)
        refetch();
      })
    }
  };
console.log(data)
  return (
    <div className="modal-overlay">
    <div className="container-bg">
      <div className="modal__block">
        <div className="modal__content">
          <h3 className="modal__title">Редактировать объявление</h3>
          <div className="modal__btn-close" onClick={() => dispatch(setEditModal(false))}>
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
                defaultValue={data.title}
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
                defaultValue={data.description}
                onChange={(event) => setDescription(event.target.value)}
              ></textarea>
            </div>
            <div className="form-newArt__block">
              <p className="form-newArt__p">
                Фотографии товара<span>не более 5 фотографий</span>
              </p>
              <div className="form-newArt__bar-img">

                <div className="form-newArt__img"  onClick={() => fileInputRef.current.click()}>
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
                  <img src={`http://localhost:8090/${data.images[0]?.url}`} alt="" />
                  <div className="form-newArt__img-cover"></div>
                </div>

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
                  <img src={`http://localhost:8090/${data.images[1]?.url}`} alt="" />
                  <div className="form-newArt__img-cover"></div>
                </div>

                <div className="form-newArt__img" onClick={() => fileInputRef.current.click()}>
                  <div className="form-newArt__img-cover"></div>
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
                  <img src={`http://localhost:8090/${data.images[2]?.url}`} alt="" />
                </div>

                <div className="form-newArt__img" onClick={() => fileInputRef.current.click()}>
                  <div className="form-newArt__img-cover"></div>
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
                  <img src={`http://localhost:8090/${data.images[3]?.url}`} alt="" />
                </div>

                <div className="form-newArt__img" onClick={() => fileInputRef.current.click()}>
                  <div className="form-newArt__img-cover"></div>
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
                  <img src={`http://localhost:8090/${data.images[4]?.url}`} alt="" />
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
                defaultValue={data.price}
                onChange={(event) => setPrice(event.target.value)}
              />
              <div className="form-newArt__input-price-cover"></div>
            </div>
            <button
              className="form-newArt__btn-pub btn-hov02"
              id="btnPublish"
              onClick={(event) => handleSaveChangesClick(event)}
            >
              Сохранить изменения
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
  )
}