import "./App.css";
import NavBar from "./componentes/NavBar";
import CarruselBts from "./componentes/Carrusel/index";

import ItemListContainer from "./ItemListContainer/index";
import CardNosotros from "./componentes/cards";
import Nosotros from "./componentes/Nosotros";
function App() {
  return (
    <div className="App">
      <NavBar />
      <CarruselBts />
      <Nosotros/>
      <CardNosotros />
      <ItemListContainer />
    </div>
  );
}

export default App;
