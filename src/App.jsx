import Homepage from "./pages/Homepage";
import "./styles/index.scss";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Detailpage from "./pages/Detailpage";
import Cartpage from "./pages/Cartpage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/product/:slug" element={<Detailpage />} />
        <Route path="/cart" element={<Cartpage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
