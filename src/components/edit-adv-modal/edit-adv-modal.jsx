/* eslint-disable react/prop-types */
import { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { setEditModal } from '../../store/slice/modal-slice';
import { TiDeleteOutline } from 'react-icons/ti';
import {
  usePatchAdvMutation,
  usePostImageMutation,
  useDeleteImageMutation,
} from '../../store/adv-api';

import styles from './edit-adv-modal.module.scss';

export const EditAdvertisementComponent = ({ data, refetch }) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState(data.title);
  const [description, setDescription] = useState(data.description);
  const [price, setPrice] = useState(data.price);
  const [isFileChange, setIsFileChange] = useState(true);
  const [isImage, setIsImage] = useState(null);

  const [patchAdv] = usePatchAdvMutation();
  const [postImage] = usePostImageMutation();
  const [deleteImage] = useDeleteImageMutation();

  const handleSaveChangesClick = (event) => {
    event.preventDefault();
    patchAdv({ id: data.id, body: { title, description, price } }).then(
      (res) => {
        console.log(res);
        refetch();
        dispatch(setEditModal(false));
      }
    );
  };

  const fileInputRef = useRef(null);

  const handleFileChange = (file) => {
    const formData = new FormData();
    if (file) {
      formData.append('file', file);
      console.log(formData);
      postImage({ id: data.id, formData }).then((res) => {
        console.log(res);
        refetch();
      });
    }
  };

  const handleDeleteImage = (event, file_url) => {
    event.preventDefault();
    console.log(data.id)
    console.log(file_url)
    deleteImage({ id: data.id, file_url: file_url }).then((res) => {
      console.log(res)
      refetch()
    })
  };

  return (
    <div className={styles.container_bg}>
      <div className={styles.modal__block}>
        <div className={styles.modal__content}>
          <h3
            className={styles.modal__title}
            onClick={() => dispatch(setEditModal(false))}
          >
            Редактировать объявление
          </h3>
          <div
            className={styles.modal__btn_close}
            onClick={() => dispatch(setEditModal(false))}
          >
            <div className={styles.modal__btn_close_line}></div>
          </div>
          <form
            className={styles.modal__form_newArt}
            id="formNewArt"
            action="#"
          >
            <div className={styles.form_newArt__block}>
              <label className={styles.form_newArt__label} htmlFor="name">
                Название
              </label>
              <input
                className={styles.form_newArt__input}
                type="text"
                name="name"
                id="formName"
                placeholder="Введите название"
                defaultValue={data.title}
                onChange={(event) => setTitle(event.target.value)}
              />
            </div>
            <div className={styles.form_newArt__block}>
              <label htmlFor="text" className={styles.form_newArt__label}>
                Описание
              </label>
              <textarea
                className={styles.form_newArt__area}
                name="text"
                id="formArea"
                cols="auto"
                rows="10"
                placeholder="Введите описание"
                defaultValue={data.description}
                onChange={(event) => setDescription(event.target.value)}
              ></textarea>
            </div>
            <div className={styles.form_newArt__block}>
              <p className={styles.form_newArt__p}>
                Фотографии товара<span>не более 5 фотографий</span>
              </p>
              <div className={styles.form_newArt__bar_img}>
                <div
                  className={styles.form_newArt__img}
                  onClick={() => fileInputRef.current.click()}
                >
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
                  {data.images[0]?.url ? (
                    <img
                      src={`http://localhost:8090/${data.images[0]?.url}`}
                      alt="image"
                    />
                  ) : (
                    <img src="" alt="img" />
                  )}
                  <div className={styles.form_newArt__img_cover}></div>
                  {data.images[0]?.url ? (
                    <TiDeleteOutline
                      size={50}
                      className={styles.md_delete}
                      onClick={(event) => {
                        handleDeleteImage(event, data.images[0].url)
                      }}
                    />
                  ) : null}
                </div>
                <div
                  className={styles.form_newArt__img}
                  onClick={() => fileInputRef.current.click()}
                >
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
                  {data.images[1]?.url ? (
                    <img
                      src={`http://localhost:8090/${data.images[1]?.url}`}
                      alt="image"
                    />
                  ) : (
                    <img src="" alt="img" />
                  )}
                  <div className={styles.form_newArt__img_cover}></div>
                  {data.images[1]?.url ? (
                    <TiDeleteOutline
                      size={50}
                      className={styles.md_delete}
                      onClick={(event) => {
                        handleDeleteImage(event, data.images[1].url)
                      }}
                    />
                  ) : null}
                </div>
                <div
                  className={styles.form_newArt__img}
                  onClick={() => fileInputRef.current.click()}
                >
                  <div className={styles.form_newArt__img_cover}></div>
                  {data.images[2]?.url ? (
                    <TiDeleteOutline
                      size={50}
                      className={styles.md_delete}
                      onClick={(event) => {
                        handleDeleteImage(event, data.images[2].url)
                      }}
                    />
                  ) : null}
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
                  {data.images[2]?.url ? (
                    <img
                      src={`http://localhost:8090/${data.images[2]?.url}`}
                      alt="image"
                    />
                  ) : (
                    <img src="" alt="img" />
                  )}
                </div>

                <div
                  className={styles.form_newArt__img}
                  onClick={() => fileInputRef.current.click()}
                >
                  <div className={styles.form_newArt__img_cover}></div>
                  {data.images[3]?.url ? (
                    <TiDeleteOutline
                      size={50}
                      className={styles.md_delete}
                      onClick={(event) => {
                        handleDeleteImage(event, data.images[3].url)
                      }}
                    />
                  ) : null}
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
                  {data.images[3]?.url ? (
                    <img
                      src={`http://localhost:8090/${data.images[3]?.url}`}
                      alt="image"
                    />
                  ) : (
                    <img src="" alt="img" />
                  )}
                </div>
                <div
                  className={styles.form_newArt__img}
                  onClick={() => fileInputRef.current.click()}
                >
                  <div className={styles.form_newArt__img_cover}></div>
                  {data.images[4]?.url ? (
                    <TiDeleteOutline
                      size={50}
                      className={styles.md_delete}
                      onClick={(event) => {
                        handleDeleteImage(event, data.images[4].url)
                      }}
                    />
                  ) : null}
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
                  {data.images[4]?.url ? (
                    <img
                      src={`http://localhost:8090/${data.images[4]?.url}`}
                      alt="image"
                    />
                  ) : (
                    <img src="" alt="img" />
                  )}
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
                defaultValue={data.price}
                onChange={(event) => setPrice(event.target.value)}
              />
              <div className={styles.form_newArt__input_price_cover}></div>
            </div>
            <button
              className={styles.form_newArt__btn_pub}
              id="btnPublish"
              onClick={(event) => handleSaveChangesClick(event)}
            >
              Сохранить изменения
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
