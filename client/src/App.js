import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Componentes/Home";
import Landing from "./Componentes/Landing";
import CreatePokemon from "./Componentes/CreatePokemon";
import DetailPokemon from "./Componentes/DetailPokemon";
import NavBar from "./Componentes/NavBar";

function App() {
  return (
    <div className='App'>
      <NavBar/>
      <Routes> 
        <Route exact path='/' element={<Landing />} />
        {/* <Route path='/' element={}/> */}
        <Route path='/home' element={<Home />} />
        <Route exact path='/pokemon/detail/:id' element={<DetailPokemon />} />
        <Route
          exact
          path='/createPokemon'
          element={<CreatePokemon />}
        />
      </Routes>
    </div>
  );
}

export default App;
