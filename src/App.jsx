import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error404 from "./pages/Error404";
import ProjectContainer from "./pages/ProjectContainer";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Registro from "./pages/Registro";
import AboutUs from "./pages/AboutUs";
import ProtectedRoutes from "./routes/ProtectedRoutes";
import ModalPublicar from "./components/ModalPublicar";

import "../src/css/style.css";
import "bootstrap/dist/css/bootstrap.min.css";

import "bootstrap/dist/js/bootstrap.bundle";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/modal" element={<ModalPublicar />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/projects" element={<ProjectContainer />} />
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Error404 />} />
        {/*  <Route
          path="/projects"
          element={
            // <ProtectedRoutes>
              <ProjectContainer />
            // </ProtectedRoutes>
          }
        /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
