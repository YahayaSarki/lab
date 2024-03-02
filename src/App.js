 //import logo from './logo.svg';
import './App.css';
//import Box from '@mui/material/Box';
import Projects from './pages/Projects';
import People from './pages/People';
import {BrowserRouter, Routes, Route} from "react-router-dom";

import Layout from './pages/Layout';
import Publications from './pages/Publications';


const NoPage = ()=> {
  return (
    <div style={{margin: '20px'}}>
      <h2>Coming soon.......</h2>
    </div>
  )
}


function App() {
  return ( 
 <BrowserRouter>
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Projects />} />
      <Route path="people" element={<People />} />
      <Route path="publications" element={<Publications />} />
      <Route path="*" element={<NoPage />} />
    </Route>
  </Routes>
 </BrowserRouter>
  )
}

export default App;



/*

import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
//import Blogs from "./pages/Blogs";
//import Contact from "./pages/Contact";
//import NoPage from "./pages/NoPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

*/