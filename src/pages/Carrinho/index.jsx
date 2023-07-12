import React from 'react'
import { LogHeader } from '../Home/styles'
import LogoPng from '../../assets/img/logo.png' 
import { useState } from "react"




const Carrinho = () => {

  const [itens, setItens] = useState([])
  const [total, setTotal] = useState(0)

  const adicionarAoCarrinho = (item) => {
    setItens([...itens, item])
    setTotal(total + item.preco)
    
  }

  const removerDoCarrinho = (item) => {
    const index = itens.findIndex((i) => i.id === item.id);
    setItens([...itens.slice(0, index), ...itens.slice(index + 1)])
    setTotal(total - item.preco)
  }

  
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

  <div>
     
      <ul>
        {itens.map((item) => (
          <li key={item.id}>
            {item.nome} - R${item.preco.toFixed(2)}
            <button onClick={() => removerDoCarrinho(item)}>Remover</button>
          </li>
        ))}
      </ul>
      <p>Total: R${total.toFixed(2)}</p>
      <button onClick={() => adicionarAoCarrinho({ id: 1, nome: "Item 1", preco: 1999.99 })}>Adicionar ao carrinho</button>
    </div>

  </>

  )
}

export default Carrinho