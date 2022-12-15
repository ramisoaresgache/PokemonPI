import "./App.css";
import {  Route, Routes } from "react-router-dom";
import Home from "./Componentes/Home";
import Landing from "./Componentes/Landing";
import CreatePokemon from "./Componentes/CreatePokemon";
import DetailPokemon from "./Componentes/DetailPokemon";

function App() {

  return (
    <div className='App'>
        <Routes>
          <Route exact path='/' element={<Landing/>} />
          <Route path='/home' element={<Home/>} />
           <Route exact path='/pokemon/detail/:id'element={<DetailPokemon/>} /> 
          <Route exact path='/createPokemon/createPokemon' element={<CreatePokemon/>} /> 
        </Routes>
    </div>
  );
}

export default App;
