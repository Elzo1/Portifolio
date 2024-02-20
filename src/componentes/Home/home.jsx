import React from 'react'
import { BsArrowRightCircle } from "react-icons/bs";
import ft from "../../imgs/elzo1.png"
import { Link } from 'react-scroll';


const Home = () => {
  return (
    <div name="home" className='w-full h-screen  bg-gradient-to-b from-black  via-black to-gray-800 '>

      <div className='max-w-screen-lg mx-auto flex flex-col md:flex-row items-center justify-center  h-full px-4 '>
        <div className='flex flex-col justify-center h-full '>

          <h2 className='flex text-white  text-3xl sm:text-4xl font-bold max-sm:mt-96 max-md:mt-96  px-2'>Transformando Ideias em Realidade Digital.</h2>
          <p className='text-gray-500 py-3  max-w-md text-xl'> Criatividade e inovação andam lado a lado com uma  combinação única de design impactante, funcionalidade intuitiva e otimização para resultados. </p>
          <div className='group text-gray-500 py-4 max-w-md'>
            <Link to='projetos' smooth duration={500} className=" text-white w-fit px-3 max-sm:ml-36 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-400 to-blue-600 font-semibold ">
              Projetos
              <span className='group-hover:rotate-90 duration-300 '>
                < BsArrowRightCircle size={22} className='ml-1 '  />
              </span>
            </Link >

          </div>
        </div>

        <img src={ft} alt="foto" className='rounded-3xl mx-auto w-60 hover:scale-110 duration-200  max-sm:mt-14 py-4' />

      </div>
    </div>
  )
}

export default Home



