import React from 'react'
import { SiSpringsecurity } from "react-icons/si";
import { SiHibernate } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { SiSpringboot } from "react-icons/si";
import { SiJsonwebtokens } from "react-icons/si";
import { GrDocker } from "react-icons/gr";
import { FaGitSquare } from "react-icons/fa";
const projetos = () => {


    const projeto = [

        {
            id: 1,
            titu2: "Ecomerce",

            par: "Este projeto de back-end foi desenvolvido para fornecer uma base sólida para a operação de um e-commerce, garantindo segurança, eficiência e escalabilidade. E a implementação de práticas modernas de autenticação assegura a proteção dos dados dos usuários. O código-fonte está disponível publicamente para referência e colaboração.",

            titu: "Tecnologias usadas:",
            imgs: (
                <>
                    < SiSpringboot size={50} className='text-green-700 px-1 flex hover:scale-105  duration-200' />
                    < SiHibernate size={50} className='text-blue-950 px-1 flex hover:scale-105 duration-200' />
                    < SiMysql size={60} className='text-blue-700 px-1 flex hover:scale-105 duration-200' />
                    < SiSpringsecurity size={50} className='text-green-700 px-1 flex hover:scale-105 duration-200' />
                    < SiJsonwebtokens size={50} className='text-gray-950 px-1 flex hover:scale-105 duration-200' />
                    < GrDocker size={50} className='text-blue-700 px-1 flex hover:scale-105 duration-200' />
                    < FaGitSquare size={50} className='text-white text-3xl px-1 hover:text-red-600 hover:scale-105 duration-200' />


                </>
            )
        },
        {
            id: 1,
            titu2: "Ecomerce",

            par: "Este projeto de back-end foi desenvolvido para fornecer uma base sólida para a operação de um e-commerce, garantindo segurança, eficiência e escalabilidade. E a implementação de práticas modernas de autenticação assegura a proteção dos dados dos usuários. O código-fonte está disponível publicamente para referência e colaboração.",

            titu: "Tecnologias usadas:",
            imgs: (
                <>
                    < SiSpringboot size={50} className='text-green-700 px-1 flex hover:scale-105  duration-200' />
                    < SiHibernate size={50} className='text-blue-950 px-1 flex hover:scale-105 duration-200' />
                    < SiMysql size={60} className='text-blue-700 px-1 flex hover:scale-105 duration-200' />
                    < SiSpringsecurity size={50} className='text-green-700 px-1 flex hover:scale-105 duration-200' />
                    < SiJsonwebtokens size={50} className='text-gray-950 px-1 flex hover:scale-105 duration-200' />
                    < GrDocker size={50} className='text-blue-700 px-1 flex hover:scale-105 duration-200' />
                    < FaGitSquare size={50} className='text-white text-3xl px-1 hover:text-red-600 hover:scale-105 duration-200' />

                
                </>
            )
        },



    ]

    return (
        <div name="projetos" className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500 max-sm:m-28'>Projeto</p>
                    <p className='py-6 '>Confira alguns projetos aqui</p>
                </div>
                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 '>


                    {
                        projeto.map(({ id, imgs, titu, par, titu2 }) => (

                            <div key={id} className='hover:border-y-2  shadow-2xl hover:shadow-gray-600  hover:scale-105 duration-500 rounded-2xl'>
                                <h2 className='mt-2 ml-2'>{titu2}</h2>
                                <p className=' mt-5 ml-2 '>{par}</p>

                                <div>
                                   <p className='mr-2 py-3'>{titu}</p>

                                </div>
                                <div className='flex '>
                                    {imgs}
                                </div>
                                <a href="https://github.com/Elzo1/Loja-Virtual-Back-End"> <button className="text-white w-fit px-1 max-sm:ml-6 py-2 my-3 flex items-center rounded-md bg-gradient-to-r from-cyan-400 to-blue-600 font-semibold hover:scale-110 sm:m-3 duration-300 shadow-md hover:shadow-green-700" >
                                    Ir PARA O CÓDIGO
                                </button>
                                </a>


                            </div>

                        ))

                    }


                </div>
            </div>
        </div>
    )
}

export default projetos
