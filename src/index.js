import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import Home from './components/Home/home';
import Contact from './components/Contact/contact';
import About from './components/About/about';
import Projects from './components/Projects/projects';
import PageNotFound from './components/404/pagenotfound';
import { Routes, Route, Navigate} from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
        <Route path="*" element={<Navigate to="Not-Found"/>} />
        <Route path="Not-Found" element={<PageNotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="About" element={<About />} />
        <Route path="Contact" element={<Contact />} />
        <Route path="Projects" element={<Projects />} />
      </Routes>
    <App/>
  </BrowserRouter>,
);