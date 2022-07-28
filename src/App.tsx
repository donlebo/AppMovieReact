
import React from "react";
import "./App.css";
import Login from "./Components/Login/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RestrictedRoute } from "./Components/RestrictedRoute";
import { Movie } from "./Components/Movie";
import Navbar from "./Components/Navbar";
import { Home } from "./Components/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<RestrictedRoute />} />
          <Route path={"/home"} element={<Home />} />
          <Route path={"/movie/:id"} element={<Movie />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;