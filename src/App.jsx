import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes/routes";
import { Header, Authorization, NewAdvModal, Footer } from "./components";
import { useGetUserAppMutation } from "./store/user-api";
import { setAccessToken, setUser } from "./store/slice/user-slice";

function App() {
  const dispatch = useDispatch()
  const auth_modal = useSelector((state) => state.modal.authModal);
  const adv_modal = useSelector((state) => state.modal.advModal);
  // const user = JSON.parse(localStorage.getItem('user'))
  const user = useSelector((state) => state.user.user);

  const [getUser] = useGetUserAppMutation();

  useEffect(() => {
    dispatch(setAccessToken(localStorage.getItem('access_token')))
    getUser().then((res) => {
      console.log(res.data);
      dispatch(setUser(res.data))
    })
  }, [dispatch, getUser])

console.log(user);
// localStorage.clear()
  return (
    <BrowserRouter>
    { adv_modal ? null : <Header user={user} /> }
      {/* <Header user={user} /> */}
      <AppRoutes />
      { auth_modal ? <Authorization /> : null }
      { adv_modal ? <NewAdvModal /> : null }
      <Footer />
    </BrowserRouter>
  )
}

export default App
