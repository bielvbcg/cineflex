import React from "react"
import { useEffect , useState } from 'react';
import { useParams , Link } from "react-router-dom"
import styled from 'styled-components';
import axios from 'axios';

import Header from "./Header"

export default function EscolhaSessao(){
  const [ sessoes , setSessoes ] = useState(null)
  const [ days , setDays ] = useState(null)
  const {idFilme} = useParams();
  
  useEffect(() => {
    const requisicao = axios.get(`https://mock-api.driven.com.br/api/v4/cineflex/movies/${idFilme}/showtimes`)
    
    requisicao.then(filme => {
      setSessoes(filme.data)
      setDays(filme.data.days)
    } )
     } , [])
  
  return (
    <>
      <Header></Header>
      <Titulo>Selecione o horário</Titulo>

      <Sessoes>

        {days && days.map( day => (
            <Dia>
              <span>{day.weekday} - {day.date}</span>
              <div>
                {day.showtimes.map( sessao => (
                    <Sessao>
                  <Link to={`/assentos/${sessao.id}`}>
                      {sessao.name}
                  </Link>
                    </Sessao>
                  ))}
              </div>
            </Dia>
          ))}

      </Sessoes>

      {sessoes && 
      <Footer >
        <img src={sessoes.posterURL} alt={sessoes.title} />
        <span>{sessoes.title}</span>
      </Footer>}

    </>
  )
}

const Titulo = styled.span`
  height: 110px;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 24px;
  line-height: 28px;
  color: #293845;
`

const Sessoes = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`
const Dia = styled.div`
  display: flex;
  flex-direction: column;

  padding-left: 24px;

  span {
    padding-bottom: 22px;

    font-size: 20px;
    line-height: 23px;
    color: #293845;
  }
  
  div {
    padding-bottom: 23px;
  }

  div button {
    width: 83px;
    height: 43px;

    margin-right: 8px;

    background-color: #E8833A;
    color: white;

    border-radius: 3px;
    border: none;

    font-size: 18px;
    line-height: 21px;
    text-align: center;
    letter-spacing: 0.02em;
}
`
const Footer = styled.div`
  background-color: #DFE6ED;

  height: 117px;

  display: flex;
  justify-content: flex-start;
  align-items: center;

  border: 1px solid #9EADBA;


  img {
    width: 48px;
    height: 72px;

    border: 8px solid white;

    margin-left: 10px;
  }

  span {
    font-size: 26px;
    line-height: 30px;

    margin-left: 14px;
  }
`

const Sessao = styled.button`

`