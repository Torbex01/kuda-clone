
import styled from "styled-components";
import Header from "./static/Header";
import Personal from "./pages/Personal";
import Footer from "./static/Footer";
import {BrowserRouter, Routes, Route, } from 'react-router-dom'
import Business from "./pages/Business";
import Company from "./pages/Company ";

function App() {

  return (
   
   <div>

    <BrowserRouter>
    <Header/>

      <Routes>   
       <Route path="/" element={<Personal/>} />
       <Route path="/business" element={<Business/>} />
       <Route path="/company" element={<Company/>} />
      </Routes>

      <Footer/>
    </BrowserRouter>

   </div>
   
  )
}

export default App

