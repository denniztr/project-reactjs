import { BrowserRouter } from "react-router-dom";
import { useSelector } from "react-redux";
import { AppRoutes } from "./routes/routes";

import { Header, Authorization } from "./components";

function App() {
  const auth_modal = useSelector((state) => state.modal.authModal);
  return (
    <BrowserRouter>
      <Header />
      <AppRoutes />
      { auth_modal ? <Authorization /> : null }
    </BrowserRouter>
  )
}

export default App
