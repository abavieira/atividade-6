import { useState } from "react";
import "./App.css";
import Garage from "./components/Listacarro";
import ListaCidade from "./components/ListaCidade";
import ListaCinema from "./components/ListaCinema";
import Formulario from "./components/Formulario";

function App() {
  return (
    <>
      <Formulario />
      <Garage />
      <ListaCidade />
      <ListaCinema />
    </>
  );
}

export default App;
