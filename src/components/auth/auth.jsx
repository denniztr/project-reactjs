import './auth.scss';

export const Authorization = () => {
  return (
    <div className="wrapper">
      <div className="container-enter">
        <div className="modal__block">
          <form className="modal__form-login" id="formLogIn" action="#">
            <div className="modal__logo">
              <a>
                <a>
                  <img alt="logo" />
                </a>
              </a>
            </div>
            <input
              className="modal__input login"
              type="text"
              name="login"
              id="formlogin"
              placeholder="email"
            />
            <input
              className="modal__input password"
              type="password"
              name="password"
              id="formpassword"
              placeholder="Пароль"
            />
            <button className="modal__btn-enter" id="btnEnter">
              <a>Войти</a>
            </button>
            <button className="modal__btn-signup" id="btnSignUp">
              <a to="/register">Зарегистрироваться</a>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
