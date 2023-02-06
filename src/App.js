import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import Fetchdata from './components/Fetchdata';


const App = () => {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
  
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/general" element={<Fetchdata cat='general'/>}/>
            <Route path="/business" element={<Fetchdata cat='business'/>}/>
            <Route path="/entertainment" element={<Fetchdata cat='entertainment'/>}/>
            <Route path="/health" element={<Fetchdata cat='health'/>}/>
            <Route path="/science" element={<Fetchdata cat='science'/>}/>
            <Route path="/sports" element={<Fetchdata cat='sports'/>}/>
            <Route path="/technology" element={<Fetchdata cat='technology'/>}/>
        </Routes>
    </BrowserRouter>
    </>
  )}

export default App
