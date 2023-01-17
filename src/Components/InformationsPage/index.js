import React from 'react'
import Image from '../../assets/mainImage.webp'
import "./style.css"
export default function SectionInformations() {
  return (
    <div className='Container'>
        <img src={Image} alt="imagem central" />
        <section className='ContentText'>
          <h2 className='Text typing-animation'>Desenvolvedor Web Full-Stack </h2>
        </section>
    </div>
  )
}
