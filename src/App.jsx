import { BrowserRouter } from "react-router-dom";
import { useSelector } from "react-redux";
import { AppRoutes } from "./routes/routes";

import { Header, Authorization, NewAdvModal } from "./components";

function App() {
  const auth_modal = useSelector((state) => state.modal.authModal);
  const adv_modal = useSelector((state) => state.modal.advModal);
  return (
    <BrowserRouter>
      <Header />
      <AppRoutes />
      { auth_modal ? <Authorization /> : null }
      { adv_modal ? <NewAdvModal /> : null }
    </BrowserRouter>
  )
}

export default App
