import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes/routes";

import { Header } from "./components"

function App() {
  return (
    <BrowserRouter>
      <Header />
      <AppRoutes />
    </BrowserRouter>
  )
}

export default App
