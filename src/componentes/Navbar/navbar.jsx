import React, { useState } from 'react'
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, animateScroll as scroll } from 'react-scroll';


const Navbar = () => {

  {/*função para mudar o estado do icone do menu direito*/ }
  const [nav, setNav] = useState(false);

  {/*função para chamar os links na barra de navegaçã*/ }
  const links = [
    {
      id: 1,
      link: 'Home',
    },
    {
      id: 2,
      link: 'Sobre',
    },
    {
      id: 3,
      link: 'Projetos',
    },
    {
      id: 4,
      link: 'Experiência',
    },
    {
      id: 5,
      link: 'Contatos',
    }
  ]

  return (

    <div className='flex justify-between items-center w-full h-20 bg-black text-white fixed'>
      <div>
        {/*fundo e nome no cabeçalho*/}

        <h1 className=' text-3xl font-assinatura ml-3  '>divMaster</h1>
      </div>

      {/*links do cabeçalho chamando a função links */}

     
        <ul  className='hidden md:flex'>


          {links.map(({ id, link }) => (
            <li key={id}
              className='px-4 cursor-pointer capitalize
            font-medium text-gray-500 
            hover:scale-105 duration-200'>
              <Link to={link} smooth duration={500}>{link}</Link>
            </li>
          ))}
        </ul>
      {/*chamando a função nav para mudar o estado do menu*/}
      <div
        onClick={() => setNav(!nav)}
        className='cursor-pointer pr-4 z-10 text-gray-500'>
        {nav ? <FaTimes size={20} /> : <FaBars size={20} />}
      </div>

      {nav && (

        <ul className='flex flex-col justify-center items-center 
      absolute top-0 left-0 w-full h-screen bg-gradient-to-b
      from-black to-gray-900 text-gray-700 md:hidden'>

          {links.map(({ id, link }) => (
            <li key={id} className='px-4 cursor-pointer capitalize py-6 text-4xl'>
              <Link onClick={() => setNav(!nav)} name='link' link smooth duration={500}>{link}</Link>
            </li>
          ))}
        </ul>

      )}


    </div>
  )
}

export default Navbar
