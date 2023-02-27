import React from "react";
import "boxicons";
import { Header } from "./Componets/header/index";
import { BrowserRouter as Router } from "react-router-dom";
import { Paginas } from "./Componets/Paginas";
import { DataProvider } from "./context/DataProvider";
import Carrito from "./Componets/carrito";

function App() {
  return (
    <DataProvider>
      <div className="App">
        <Router>
          <Header />
          <Carrito/>
          <Paginas />
        </Router>
      </div>
    </DataProvider>
  );
}

export default App;
