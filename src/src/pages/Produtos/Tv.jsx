import React from 'react'
import { LogHeader } from '../Home/styles'
import LogoPng from '../../assets/img/logo.png' 
import TvPng from '../../assets/img/tv.png'
import {ContainerDesc, ContainerData} from '../Produtos/styles'





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

  

<ContainerDesc>
  <p>Você está em Tv ↪ Tv 4k ↪ Código:271563 | <strong>Em estoque</strong></p>
  <hr />
  <h5>Smart TV Samsung 43 Polegadas UHD 4K, 3 HDMI, 1 USB, Processador Crystal 4K</h5>
  <img src={TvPng}   /> 
  <div className='desc-price'>
  <h3>R$ 1.999,99</h3>
  <span>À vista no pix <br /> <br />Em até 10x de <strong>R$ 199,99</strong> sem juros no cartão</span>
  </div>
  <button>comprar</button>
</ContainerDesc>

<ContainerData>
    <h2>descrição do produto</h2>
    <p> <strong>Samsung Smart TV 43 UHD 4K</strong><br />
       O processador Crystal 4K transforma tudo o que você assiste em resolução próxima à 4K.
       Todos os produtos UHD 4K da Samsung são certificados pela CEA (Consumer Eletronics Association) 
       e DE (Digital Europe).
      Estas entidades estabeleceram critérios mínimos para certificar um produto como o UHD 4K, entre eles, 
      garantir que o produto tenha em cada pixel a capacidade de reproduzir todas as cores. 
      A experiência pode variar de acordo com tipo e formato do conteúdo.</p>

     <div className='sub-data'>
      <h3>informações técnicas</h3>
     
      <p> <strong>Características:</strong>
            - Marca: Samsung
            - Modelo: UN43AU7700GXZD

            Especificações:

            Tela: 
            - Tamanho da tela: 43” 
            - Resolução: 3.840 x 2.160
            - Tela Curva: Não

            Energia:
            Alimentação de Energia: AC100-240V 50/60HZ
            Consumo de Energia (Máximo): 130 W

            Dimensões:
           - Tamanho da TV com suporte: 963.9 x 627.8 x 192.5 mm
           - Tamanho da TV sem suporte: 963.9 x 558.9 x 59.6 mm</p>
           </div>
</ContainerData>
  </>
  )
}

export default Tv