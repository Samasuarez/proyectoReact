import "./App.css";
import Ad from "./componentes/add";
import NavBar from "./componentes/NavBar/index";
import ItemListContainer from "./containers/ItemListContainer/index";
function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer saludo={"Bienvenidos"} />
      <Ad>
        <img src="https://media.quincemil.com/imagenes/2022/01/04123104/shutterstock_1712005990-640x360.jpg" />
      </Ad>
    </>
  );
}
export default App;