//import React, { useState } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";

import EscolhaFilme from "./EscolhaFilme"
import EscolhaSessao from "./EscolhaSessao";

export default function App(){

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<EscolhaFilme />}></Route>
        <Route path="/escolhaSessao/:idFilme" element={<EscolhaSessao />}></Route>
      </Routes>
    </BrowserRouter>
    
  )
}