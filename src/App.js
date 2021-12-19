import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";

import EscolhaFilme from "./EscolhaFilme"

export default function App(){
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<EscolhaFilme />}></Route>
        <Route></Route>
      </Routes>
    </BrowserRouter>
    
  )
}