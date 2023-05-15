import React from "react";
import { Navigate, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/pokedex" element={<Navigation />}>
        <Route index element={<Home />} />
      </Route>
      <Route path="*" element={<Navigate to="/pokedex" />} />
    </Routes>
  );
};

export default AppRouter;
