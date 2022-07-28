import React, { useState } from "react";
import { Home } from "./Home";
import Login from "./Login/Login";

export const RestrictedRoute = () => {
  const [isLogged, setisLogged] = useState(false);

  return isLogged ? <Home /> : <Login onSubmit={setisLogged} />;
};
