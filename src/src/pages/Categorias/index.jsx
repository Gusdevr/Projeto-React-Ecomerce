import React, { useState } from 'react'
import axios from 'axios'
import { ContainerCategorias, SectionCategorias } from '../Categorias/styles'
import { LogHeader } from '../Home/styles'
import LogoPng from '../../assets/img/logo.png'
import PcPng from '../../assets/img/computador.png'
import AcePng from '../../assets/img/perifericos.png'
import GamePng from '../../assets/img/Switch.png'
import TvPng from '../../assets/img/smart.png'
import PhonePng from '../../assets/img/smartphones.png'
import NotePng from '../../assets/img/notebooks.png'

function Categorias() {
  const [nome, setNome] = useState('')
  const [descricao, setDescricao] = useState('')
  const [imagem, setImagem] = useState(null)
  const [erro, setErro] = useState(null)

  const handleChangeNome = (event) => {
    setNome(event.target.value)
  };

  const handleChangeDescricao = (event) => {
    setDescricao(event.target.value)
  };

  const handleChangeImagem = (event) => {
    setImagem(event.target.files[0])
  };

  const handleSubmit = (event) => {
    event.preventDefault()
    const formData = new FormData()
    formData.append('nome', nome)
    formData.append('descricao', descricao)
    formData.append('file', imagem)
    axios
      .post('https://api-ecommerce-gamaxp47.herokuapp.com/categoria', formData, {
        headers: {
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwidGlwbyI6IjEiLCJpYXQiOjE2ODIxMDMyOTIsImV4cCI6MTY4MjcwODA5Mn0.rXpF_hkeB98HUZx6Fn9pli4px3Rfd_-ewjbHKYfM8-A',
          'Content-Type': 'multipart/form-data',
        },
      })
      .then((response) => {
        console.log(response.data)
      })
      .catch((error) => {
        console.error(error)
        setErro(error.message)
      });
  };

  return (
    <ContainerCategorias>
      <header>
        <LogHeader>
          <a href="/">
            <img src={LogoPng} alt="Logo" />
          </a>
        </LogHeader>
      </header>

      <h1>Categorias</h1>

      <SectionCategorias>
        <div className="art-initi">
          <h3>computadores</h3>
          <a href='#'> <img src={PcPng} alt="Computadores" /> </a>
        </div>

        <div className="art-sec">
          <h3>acessórios</h3>
          <img src={AcePng} alt="Acessórios" />
        </div>

        <div className="art-thir">
          <h3>games</h3>
          <img src={GamePng} alt="Games" />
        </div>

        <div className='art-four'>
        <h3>tv's</h3>
        <a href='tv'><img src={TvPng}></img></a>
      </div>

      <div className='art-five'>
        <h3>smartphones</h3>
        <img src={PhonePng}></img>
      </div>

      <div className='art-six'>
        <h3>notebooks</h3>
        <img src={NotePng}></img>
      </div>


        </SectionCategorias>
   
        
   
    
    </ContainerCategorias>
  )
}

export default Categorias
