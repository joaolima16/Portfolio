import React from 'react'
import Example from '../ModalInfo'
import './style.css'
export default function CardsWrapper() {
  return (

    <>
    <div className='ContainerCard'>
     
      <div className='Card'>
      
        <div className='Content'>
          <h2>Informações</h2>
          <h3>Sobre mim</h3>
          <p>Olá! Me chamo João Vitor De Lima Gonçalves, tenho 18 anos,a 2 anos venho me dedicando a aprender sobre esse vasto uníverso
            da programação...
          </p>
          <a href='#'>Mais informações</a>
        </div>
      </div>
      
      <div className='Card'>
        <div className='Content'>
          <h2>Escolaridade</h2>
          <h3>Experiência Acadêmica</h3>
          <p>Recentemente me conclui o ensino médio e também finalizei um curso técnico de Desenvolvimento De 
            Sistemas na instituição SENAI Suiço-Brasileiro...
          </p>
          <a href='#'>Mais informações</a>
        </div>
      </div>
      <div className='Card'>
        <div className='Content'>
          <h2>Profissional</h2>
          <h3>Experiência profissional</h3>
          <p>Estou em busca da minha primeira oportunidade como desenvolvedor mas, atualmente estou
            contrado como Jovem-Aprendiz em suporte...
          </p>
          <a href='#'>Mais informações</a>
        </div>
      </div>
    </div>
    </>
  )
}
