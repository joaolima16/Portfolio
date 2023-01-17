import React, { useState } from 'react'
import './style.css'
export default function CardsWrapper() {
  return (

    <>
      <div className='ContainerCard'>

        <div className='Card'>

          <section className='Content'>
            <h2>Informações</h2>
            <h3>Sobre mim</h3>
            <p>Olá! Me chamo João Vitor De Lima Gonçalves, tenho 18 anos,a 2 anos venho me dedicando a aprender sobre esse vasto uníverso
              da programação. Dentro desse vasto universo a área na qual mais tive empatia foi Desenvolvimento Web.
            </p>

          </section>
        </div>

        <div className='Card'>
          <section className='Content'>
            <h2>Escolaridade</h2>
            <h3>Experiência Acadêmica</h3>
            <p>Recentemente conclui o ensino médio e também finalizei um curso técnico de Desenvolvimento De
              Sistemas na instituição SENAI Suiço-Brasileiro no qual tinha o período de 1 ano e meio. Há pouco tempo
              prestei o vestibular do centro universitário Senac e consegui uma vaga no Tecnólogo em Análise e Desenvolvimento De Sistemas
            </p>
          </section>
        </div>
        <div className='Card'>
          <section className='Content'>
            <h2>Profissional</h2>
            <h3>Experiência profissional</h3>
            <p>Não possuo experiência profissional, estou em busca da sonhada primeira vaga como desenvolvedor mas, atualmente estou
              previamente contratado como Jovem-Aprendiz em suporte.
            </p>
          </section>
        </div>
      </div>
    </>
  )
}
