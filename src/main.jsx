import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import store from "./store/index.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ResidentPage from "./components/ResidentPage.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}/>
        <Route path="/:id" element={<ResidentPage/>}/>
      </Routes>
      
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
