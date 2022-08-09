import './App.css';
import { MainPage } from './MainPage';
import { LinksPage } from "./LinksPage"
import { Layout } from './Layout';
import { Home } from './Home';

import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"

export default function App() {
  return (
    <div className="router">
      <Router>
        <Routes>
          <Route path="/" element={<Layout />} >
            <Route index element={<Home />} />
            <Route path="links" element={<LinksPage />} />
            <Route path="mainpage" element={<MainPage />} />
          </Route>
        </Routes>
      </Router >
    </div>
  );
}
