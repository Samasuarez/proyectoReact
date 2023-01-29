import "./App.css";
import NavBar from "./componentes/NavBar";
import FooterContainer from "./componentes/footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from "./ItemListContainer";
import ItemDetailContainer from "./componentes/itemDetailContainer";
import ShopProvider from "./componentes/context/ShopProvider";

function App() {
  return (
    <div className="App">
      <ShopProvider>

      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:categoryId" element={<ItemListContainer />} />
          <Route path="/detail/:id" element={<ItemDetailContainer />} />
        </Routes>
        <FooterContainer />
      </BrowserRouter>
      </ShopProvider>
    </div>
  );
}

export default App;
