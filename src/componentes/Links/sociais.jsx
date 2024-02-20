import React from 'react'
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from "react-icons/bs";

const Sociais = () => {

  const links = [
    {
      id: 1,
      filhos: (
        <>
          Linkedin
          <FaLinkedin size={30} />

        </>

         
      ),

      href: "https://www.linkedin.com/in/elzo-santos-3a5771164/",
      style:  " rounded-tr-md bg-cyan-500 "
    },
    {
      id: 2,
      filhos: (
        <>
          Github
          <FaGithub size={30} />

        </>
      ),

      href: "https://github.com/Elzo1",
      style: " rounded-tr-md "
    },
    {
      id: 3,
      filhos: (
        <>
          E-mail
          <HiOutlineMail size={30} />

        </>
      ),

      href: "mailto:elzosantos006@gmail.com",
      style: " rounded-br-md "
    },
    {
      id: 4,
      filhos: (
        <>
          Curriculo
          <BsFillPersonLinesFill size={30} className=''/>

        </>
      ),

      href: "/Curriculo Elzo.docx",
      style: " rounded-br-md bg-green-500",
      download: true
    },
  ]

  return (
    <div className='hidden lg:flex flex-col top-[35%] left-0 fixed'>
      <ul>

        {links.map(({ id, style, filhos, href, download }) => (

          <li key={id} className={"flex justify-between items-center w-32 h-12 bg-gray-500 px-1 ml-[-85px] hover:ml-[-7px]  hover:rounded-md duration-300  " + " " + style} >
            <a href={href} className="flex justify-between items-center w-full text-white px-1" download={download} target='_blank'>
              {filhos}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Sociais
