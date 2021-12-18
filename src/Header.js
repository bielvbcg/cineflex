import React from "react"
import styled from 'styled-components';

export default function Header(){
  return (
    <Titulo>
      <span>CINEFLEX</span>
    </Titulo>
  )
}

const Titulo = styled.div`
  height : 67px;
  background-color: #C3CFD9;

  display : flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  span {
    font-size: 34px;
    line-height: 40px;

    color: #E8833A;
}
`

