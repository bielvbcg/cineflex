import React from "react"
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import Header from "./Header"

export default function EscolhaFilme(){
  const [filmes , setFilmes] = useState([])

  useEffect(() => {
    const requisicao = axios.get("https://mock-api.driven.com.br/api/v4/cineflex/movies")

    requisicao.then( resposta => {
      setFilmes(resposta.data)
    })
    
  }, [])
  filmes && console.log(filmes)

  return (
    <>
      <Header />
      <Titulo>Selecione o filme</Titulo>
      <Filmes>
        {filmes.map( filme => {
          return (
            <Link to={`/sessoes/${filme.id}`}>
              <Filme>
                <img src={filme.posterURL} alt={filme.title}></img>
              </Filme>
            </Link>
        )})}</Filmes>
    </>
)}

const Titulo = styled.span`
  height: 110px;

  display: flex;
  justify-content: center;
  align-items: center;
`

const Filmes = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  gap: 27px 46px;
`

const Filme = styled.div`
  box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
  border-radius: 3px solid white;

  img {
    width: 129px;
    height: 193px;
  }
`