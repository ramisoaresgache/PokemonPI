import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Componentes/Home";
import Landing from "./Componentes/Landing";
import CreatePokemon from "./Componentes/CreatePokemon";
import DetailPokemon from "./Componentes/DetailPokemon";
import NavBar from "./Componentes/NavBar";
import Loading from "./Componentes/Loading";
import NotFound from "./Componentes/NotFound";
import About from "./Componentes/About";

function App() {
  return (
    <div className='App'>
      <NavBar />
      <Routes>
        <Route exact path='/' element={<Landing />} />
        <Route exact path='/loading' element={<Loading />} />
        <Route path='/home' element={<Home />} />
        <Route path="/notfound" element={<NotFound />} />
        <Route path='/pokemon/detail/:id' element={<DetailPokemon />} />
        <Route path='/createPokemon' element={<CreatePokemon />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </div>
  );
}
export default App;
