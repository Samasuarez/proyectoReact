import "./App.css";
import NavBar from "./componentes/NavBar";
import CarruselBts from "./componentes/Carrusel/index";
import ItemListContainer from "./ItemListContainer/index";
import CardNosotros from "./componentes/cards";
import Nosotros from "./componentes/Nosotros";
import FooterContainer from "./componentes/footer";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <CarruselBts />
          <Nosotros />
          <CardNosotros />
          <Route path="/" element={<ItemListContainer />} />
        </Routes>
        <FooterContainer />
      </BrowserRouter>
    </div>
  );
}

export default App;
