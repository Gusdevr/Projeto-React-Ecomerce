import React from 'react'
import { LogHeader } from '../Home/styles'
import LogoPng from '../../assets/img/logo.png' 


const Tv = () => {
  return (
<>
    <header>
    <LogHeader>
      <a href="/">
        <img src={LogoPng} alt="Logo" />
      </a>
    </LogHeader>

    
  </header>

  <p>Você está em Tv ↪ Tv 4k ↪ Código:271563 </p>
  <hr />
  <h5>Smart TV Samsung 43 Polegadas UHD 4K, 3 HDMI, 1 USB, Processador Crystal 4K</h5>
  </>
  )
}

export default Tv