import { useSelector } from "react-redux";

import LogoHome from '../../assets/icons/icon_01.png'
import LogoAddNewAdv from '../../assets/icons/icon_02.png'
import LogoProfile from '../../assets/icons/icon_03.png'

import './footer.scss'

export const Footer = () => {
  return (
    <footer className="footer">
    <div className="footer__container">
      <div className="footer__img">
        <a href="" target="_self">
          <img src={LogoHome} alt="home" />
        </a>
      </div>
      <div className="footer__img">
        <a href="" target="_self">
          <img src={LogoAddNewAdv} alt="home" />
        </a>
      </div>
      <div className="footer__img">
        <a href="" target="_self">
          <img src={LogoProfile} alt="home" />
        </a>
      </div>
    </div>
  </footer>
  )
}