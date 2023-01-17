import React, { useState } from 'react'
import './style.css'
import { Link } from 'react-router-dom'
export default function Header() {
  const [Mode, SetMode] = useState(false)
  const ToggleMode = () => {
    SetMode(!Mode);
  }
  return (
    <header className='Header'>
      <div className='Wrapper'>
        <div className='list-wrapper'>
          <ul className='informations-list'>
            <Link to="/"><li> Home</li> </Link>
            <Link to="/sobre"><li> Sobre mim</li></Link>
            <li> Projetos</li>
            <li> Contatos</li>
          </ul>
        </div>

        <div className={Mode ? "icon iconActive" : "icon"} onClick={() => ToggleMode()}>
          <div className='hamburguer' />
        </div>
        <div className={Mode ? "menu menuOpen" : "menu menuClose"} >
          <div className='list'>
            <ul className='informations-list-hamburguer'>
              <li> Sobre mim</li>
              <li> Ferramentas</li>
              <li> Projetos</li>
              <li> Contatos</li>
            </ul>
          </div>
        </div>
      </div>

    </header>
  )
}
