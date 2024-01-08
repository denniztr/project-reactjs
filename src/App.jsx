import { useSelector } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes/routes";
import { Header, Authorization, NewAdvModal, Footer } from "./components";

function App() {
  const auth_modal = useSelector((state) => state.modal.authModal);
  const adv_modal = useSelector((state) => state.modal.advModal);
  // const user = JSON.parse(localStorage.getItem('user'))
  const user = useSelector((state) => state.user.user);
  
  return (
    <BrowserRouter>
      <Header user={user} />
      <AppRoutes />
      { auth_modal ? <Authorization /> : null }
      { adv_modal ? <NewAdvModal /> : null }
      <Footer />
    </BrowserRouter>
  )
}

export default App
