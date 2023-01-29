import NavBar from "./componentes/NavBar";
import FooterContainer from "./componentes/footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from "./ItemListContainer";
import ItemDetailContainer from "./componentes/itemDetailContainer";
import ShopProvider from "./componentes/context/ShopProvider";

function App() {
  return (
    <ShopProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:categoryId" element={<ItemListContainer />} />
          <Route path="/detail/:id" element={<ItemDetailContainer />} />
          <Route path="*" element={<h2>Ruta no encontrada</h2>} />
        </Routes>
        <FooterContainer />
      </BrowserRouter>
    </ShopProvider>
  );
}

export default App;
