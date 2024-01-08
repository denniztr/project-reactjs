import { Link } from 'react-router-dom';

import SkyproLogo from '../../assets/icons/logo.png'
import './main-page-button.scss';

export const NavigateToMainPage = () => {
  return (
    //<div className="main__container">
    <div className='main__menu menu'>
      <a className='menu__logo-link' target='_blank'>
        <img className='menu__logo-img' src={SkyproLogo} alt="logo" />
      </a>
      <form className='menu__form' action="#">
        <Link to='/'>
          <button className='menu__btn btn-hov-02' id='btnGoBack'>
            Вернуться на главную
          </button>
        </Link>
      </form>
    </div>
  //</div>
  )
}