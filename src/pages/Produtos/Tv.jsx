import React from 'react'
import { LogHeader } from '../Home/styles'
import LogoPng from '../../assets/img/logo.png' 
import TvPng from '../../assets/img/tv.png'
import {ContainerDesc, ContainerData} from '../Produtos/styles'
import axios from 'axios'

import { 
  FaRegUserCircle, 
  FaHeadset, 
  FaRegHeart, 
  FaShoppingCart } 
  
  from 'react-icons/fa'



const handleClick = (idProduto, quantidade) => {
axios.post('https://api-ecommerce-gamaxp47.herokuapp.com/pedido_vendas', {
  idProduto,
  quantidade
})
.then((response) => {
  console.log(response)
})
.catch((error)=> {
  console.error(error)
})
}



const Tv = () => {
 
  return (
<>
    <header>
    <LogHeader>
      <a href="/">
        <img src={LogoPng} alt="Logo" />
      </a>
    </LogHeader>

    <FaRegUserCircle size='40px'  style={{color:'darkgrey', position: 'absolute',
            marginLeft:'1050px', marginTop:'20px'
         
    }}/>
   
   <div style={{color:'darkgrey',position:'absolute', left:'88%', top:'4%', 
    display:'flex', gap:'35px', cursor:'pointer'}}>

    <FaHeadset size={'25px'} title="SAC"/>
    <FaRegHeart size={'25px'} title="Favoritos"/>
    <a href='carrinho'> <FaShoppingCart size={'25px'} style={{color:'darkgrey'}} title="Carrinho"/> </a>
    </div>

    <span style={{position: 'absolute', top: '6.5%'}}>
    <p>Faça <a href="http://localhost:3000/login">login</a> ou 
    <br /> crie seu <a href="/cadastro">cadastro</a> </p>
    </span>
         

    
  </header>

  

<ContainerDesc>
  <p>Você está em Tv ↪ Tv 4k ↪ Código:271563 | <strong>Em estoque</strong></p>
  <hr />
  <h5>Smart TV Samsung 43 Polegadas UHD 4K, 3 HDMI, 1 USB, Processador Crystal 4K</h5>
  <img src={TvPng} alt="tv 42"/> 

  <div className='desc-price'>
  <h3>R$ 1.999,99</h3>
  <span>À vista no pix <br /> <br />Em até 10x de <strong>R$ 199,99</strong> sem juros no cartão</span>
  </div>
  <button onClick={handleClick}>comprar</button>
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