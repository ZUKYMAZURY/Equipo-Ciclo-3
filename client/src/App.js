import React, { useState, useEffect } from "react";
import "./App.css";
import Login from "./components/samuel/components/Login";
import Producto from "./components/fernandoZuky/Producto";
import Usuarios from "./components/yilmar/usuarios";
import VentasModulo from "./components/samuel/components/VentasModulo";
import Header from "./components/shared/Header";
import { useSelector, useDispatch } from "react-redux";
import { selectUser, handleLogout } from "./features/userSlice";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  if (user) {
    switch (user.role) {
      case "usuario":
        return (
          <>
            <Header />
            <Producto />
            <Usuarios />
            <button onClick={() => dispatch(handleLogout)}>log out</button>
          </>
        );
      case "vendedor":
        return <VentasModulo />;
      case "admin":
        break;
      default:
        break;
    }
  }
  return <Login />;
}

export default App;
