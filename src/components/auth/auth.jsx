import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { SlArrowLeft, SlClose } from 'react-icons/sl';
import SkyproLogoModal from '../../assets/icons/logo_modal.png';
import { setAuthModal } from '../../store/slice/modal-slice';
import {
  usePostLoginMutation,
  usePostRegisterMutation,
} from '../../store/auth-api';
import { setAccessToken } from '../../store/slice/user-slice';
import styles from './auth.module.scss';

export const Authorization = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [postRegister] = usePostRegisterMutation();
  const [postLogin] = usePostLoginMutation();

  const [loginMode, setLoginMode] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [city, setCity] = useState('');
  const [error, setError] = useState('');

  const handleLoginModalChange = () => {
    setLoginMode(!loginMode);
  };

  const handleRegister = (event) => {
    event.preventDefault();

    if (!email || !password) {
      setError('Укажите email/пароль');
      return;
    }

    if (password !== repeatPassword) {
      setError('Пароли не совпадают');
      return;
    }

    if (email.length < 3) {
      setError('Введенный E-mail слишком короткий');
      return;
    }

    if (password.length < 6) {
      setError('Введенный пароль слишком короткий');
      return;
    }

    postRegister({ email, password, name, surname, city }).then((res) => {
      console.log(res.data);
      setLoginMode(false);
      setEmail(res.data.email);
      setPassword(password);
    });
  };

  const handleLogin = (event) => {
    event.preventDefault();

    if (!email || !password) {
      setError('Не заполнены данные для входа');
      setTimeout(() => {
        setError('');
      }, 2000);

      return;
    }

    if (!isEmailValid(email)) {
      setError('Введён некорректный емейл');

      setTimeout(() => {
        setError('');
      }, 2000);

      return;
    }

    postLogin({ email, password })
      .unwrap()
      .then((res) => {
        dispatch(setAccessToken(res.data.access_token));
        localStorage.setItem('refresh_token', res.data.refresh_token);
        dispatch(setAuthModal(false));
        navigate('/profile');
      })
      .catch((error) => {
        debugger
        if (error.data.detail === 'Incorrect password') {
          setError('Неверный пароль');
          setTimeout(() => {
            setError('');
          }, 3500);
        } else if (error.data.detail === 'Incorrect email') {
          setError('Неверный емейл');
          setTimeout(() => {
            setError('');
          }, 3500);
        } else {
          setError('Что-то случилось');
          setTimeout(() => {
            setError('');
          }, 3500);
        }
      });
  };

  const isEmailValid = (email) => {
    const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (email.match(mailformat)) {
      return true;
    } else false;
  };

  return (
    <div className={styles.container_bg}>
      {loginMode ? (
        <SlArrowLeft
          style={{
            position: 'absolute',
            top: '45px',
            left: '40px',
            cursor: 'pointer',
          }}
          onClick={handleLoginModalChange}
        />
      ) : (
        <SlClose
          style={{
            position: 'absolute',
            top: '45px',
            left: '40px',
            cursor: 'pointer',
          }}
          onClick={() => dispatch(setAuthModal(false))}
        />
      )}

      {loginMode ? (
        <div className={styles.modal__block}>
          <form className={styles.modal__form_login} id="formLogUp" action="#">
            <div className={styles.modal__logo}>
              <a>
                <img src={SkyproLogoModal} alt="logo" />
              </a>
            </div>
            <input
              // className="modal__input login"
              className={styles.modal__input}
              type="text"
              name="login"
              id="loginReg"
              placeholder="email"
              onChange={(event) => setEmail(event.target.value)}
            />
            <input
              // className="modal__input password-first"
              className={styles.modal__input}
              type="password"
              name="password"
              id="passwordFirst"
              placeholder="Пароль"
              onChange={(event) => setPassword(event.target.value)}
            />
            <input
              // className="modal__input password-double"
              className={styles.modal__input}
              type="password"
              name="password"
              id="passwordSecond"
              placeholder="Повторите пароль"
              onChange={(event) => setRepeatPassword(event.target.value)}
            />
            <input
              // className="modal__input first-name"
              className={styles.modal__input}
              type="text"
              name="first-name"
              id="first-name"
              placeholder="Имя (необязательно)"
              onChange={(event) => setName(event.target.value)}
            />
            <input
              // className="modal__input first-last"
              className={styles.modal__input}
              type="text"
              name="first-last"
              id="first-last"
              placeholder="Фамилия (необязательно)"
              onChange={(event) => setSurname(event.target.value)}
            />
            <input
              // className="modal__input city"
              className={styles.modal__input}
              type="text"
              name="city"
              id="city"
              placeholder="Город (необязательно)"
              onChange={(event) => setCity(event.target.value)}
            />
            {error && (
              <p style={{ marginTop: '10px', color: 'orange' }}>{error}</p>
            )}
            <button
              className={styles.modal__btn_signup_ent}
              id="SignUpEnter"
              onClick={(event) => handleRegister(event)}
            >
              <a>Зарегистрироваться</a>
            </button>
          </form>
        </div>
      ) : (
        <div className={styles.modal__block}>
          <form
            className={styles.modal__form_login}
            style={{ height: '100%' }}
            id="formLogIn"
            action="#"
          >
            <div className={styles.modal__logo}>
              <a>
                <img src={SkyproLogoModal} alt="logo" />
              </a>
            </div>
            <input
              // className="modal__input login"
              className={styles.modal__input}
              type="text"
              name="login"
              id="formlogin"
              placeholder="email"
              onChange={(event) => setEmail(event.target.value)}
            />
            <input
              // className="modal__input password"
              className={styles.modal__input}
              type="password"
              name="password"
              id="formpassword"
              placeholder="Пароль"
              onChange={(event) => setPassword(event.target.value)}
            />
            {error && (
              <p
                style={{
                  marginTop: '10px',
                  color: 'orange',
                  textAlign: 'center',
                }}
              >
                {error}
              </p>
            )}
            <button
              className={styles.modal__btn_enter}
              id="btnEnter"
              onClick={(event) => handleLogin(event)}
            >
              <a>Войти</a>
            </button>
            <button
              className={styles.modal__btn_signup}
              id="btnSignUp"
              onClick={handleLoginModalChange}
            >
              <a>Зарегистрироваться</a>
            </button>
          </form>
        </div>
      )}
    </div>
  );
};
