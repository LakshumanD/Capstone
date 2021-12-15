import "./App.css";
import Header from "./Components/Headers/Header";
import NavItems from "./Components/Headers/NavItems";

import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <NavItems />
    </BrowserRouter>
  );
}

export default App;
