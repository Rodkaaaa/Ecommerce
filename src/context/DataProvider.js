import React, { createContext, useState, useEffect } from "react";
import  Data  from "./Data";
const DataContext = createContext();

const DataProvider = (props) => {
    const [productos, setProductos] = useState([])

    useEffect(() => {
      const producto = Data.items;
      if (producto){
        setProductos(producto)
      }else{
        setProductos([])
      }
    }, [])

    const value = {
        productos : [productos] 
    }
    return(
        <DataContext.Provider value={value}>
            {props.children}
        </DataContext.Provider>
    )
};

export {DataContext,DataProvider}

