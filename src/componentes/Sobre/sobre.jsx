import React from 'react'

export const Sobre = () => {
  return (
    <div id="sobre" className='w-full h-screen bg-gradient-to-b  to-black from-gray-800 text-white '>
      <div className='max-w-screen-lg p- mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8 max-sm:mt-72  md:mt-1 '>

          <p className='text-4xl font-bold inline border-b-4 border-gray-500 max-sm:m-36 '>Sobre</p>

        </div>

        <p  className='mr-2 ml-2'>
          Oi, me chamo Elzo e sou desenvolvedor Back-End Jr, com conhecimento intermediário em Front-End.
          Meu objetivo é continuar crescendo como desenvolvedor, explorando novas tecnologias e contribuindo para projetos desafiadores que fazem a diferença.
        </p>
        <br />

        <p className='mr-2 ml-2'>
        Com um pouco mais de 1 ano de experiência com Html, Css, Tailwind, React, Java, Spring boot, Hibernate, Jpa, Mysql, Mongodb, Docker, Linux.
        </p>
      </div>

    </div>
  )
}

export default Sobre
