import React from "react";
import { Route, Routes } from "react-router-dom";
import { Inicio } from "./Inicio";
import { ProductoLista } from "./products/index";

const Paginas = () => {
  return (
    <section>
      <Routes>
        <Route path="/"  element={<Inicio />} />
        <Route path="/productos"  element={<ProductoLista />} />
      </Routes>
    </section>
  );
};

export { Paginas };
