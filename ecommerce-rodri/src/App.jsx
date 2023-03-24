import "./App.css";
import Navbar from "./components/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

function App() {
  return (
    <div>
      <Navbar />
      <div>
        <ItemListContainer greeting={"Bienvenidos a Rodritech"} />
      </div>
    </div>
  );
}

export default App;
