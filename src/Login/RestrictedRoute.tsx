import React, { useState } from "react";
import { Home } from "../Components/Home";
import Login from "../Components/Login/Login";

export const RestrictedRoute = () => {
  const [isLogged, setisLogged] = useState(false);

  return isLogged ? <Home /> : <Login onSubmit={setisLogged} />;
};
