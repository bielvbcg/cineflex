//import React, { useState } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EscolhaAssento from "./EscolhaAssento";

import EscolhaFilme from "./EscolhaFilme"
import EscolhaSessao from "./EscolhaSessao";

export default function App(){

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<EscolhaFilme />}></Route>
        <Route path="/sessoes/:idFilme" element={<EscolhaSessao />}></Route>
        <Route path="/assentos/:idSessao" element={<EscolhaAssento />}></Route>
      </Routes>
    </BrowserRouter>
    
  )
}