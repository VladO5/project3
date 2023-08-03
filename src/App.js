import './App.css';
import {Fragment} from "react";
import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home/Home";

function App() {
  return (
          <Fragment>
              <BrowserRouter>
                  <Routes>
                      <Route path="/*" element={<Home />} />
                  </Routes>
              </BrowserRouter>
          </Fragment>
  );
}

export default App;