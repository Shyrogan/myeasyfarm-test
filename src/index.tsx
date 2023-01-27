import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import reportWebVitals from './reportWebVitals';
import Welcome from './welcome/Welcome';
import Layout from "./layout/Layout"
import App from './app/App';
import "./index.css"
import 'leaflet/dist/leaflet.css'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route index element={<Welcome />}></Route>
          <Route path="/app" element={<App />}></Route>
        </Routes>
      </Layout>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
