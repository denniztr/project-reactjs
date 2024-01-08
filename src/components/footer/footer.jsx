import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { setAdvModal } from "../../store/slice/modal-slice";
import { setAuthModal } from "../../store/slice/modal-slice";
import LogoHome from '../../assets/icons/icon_01.png'
import LogoAddNewAdv from '../../assets/icons/icon_02.png'
import LogoProfile from '../../assets/icons/icon_03.png'

import './footer.scss'

export const Footer = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((state) => state.user.user);
  
  const handleAddNewAdv = (event) => {
    event.preventDefault();

    if (user) {
      dispatch(setAdvModal(true))
    } else {
      dispatch(setAuthModal(true))
    }

  };

  const handleProfilePage = (event) => {
    event.preventDefault();

    if (user) {
      navigate('/profile')
    } else {
      dispatch(setAuthModal(true))
    }
  };

  return (
    <footer className="footer">
    <div className="footer__container">
      <div className="footer__img">
        <Link to='/' target="_self">
          <img src={LogoHome} alt="home" />
        </Link>
      </div>
      <div className="footer__img">
        <Link  target="_self">
          <img src={LogoAddNewAdv} alt="home" onClick={(event) => handleAddNewAdv(event)}/>
        </Link>
      </div>
      <div className="footer__img">
        <Link target="_self" onClick={(event) => handleProfilePage(event)}>
          <img src={LogoProfile} alt="home" />
        </Link>
      </div>
    </div>
  </footer>
  )
}