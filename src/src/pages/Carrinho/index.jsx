import React from 'react'
import { LogHeader } from '../Home/styles'
import LogoPng from '../../assets/img/logo.png' 



const Carrinho = () => {
  return (
    <>
    <header>
    <LogHeader>
      <a href="/">
        <img src={LogoPng} alt="Logo" />
      </a>
    </LogHeader>
  </header>

  <h1>Seu carrinho</h1>

  </>

  )
}

export default Carrinho