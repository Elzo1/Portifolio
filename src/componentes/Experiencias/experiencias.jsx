import React from 'react'
import react from '../../imgs/react.png'
import spring from '../../imgs/spring.png'
import linux from '../../imgs/linux.png'
import mysql from '../../imgs/mysql.png'
import mongodb from '../../imgs/mongodb.png'
import java from '../../imgs/java.png'
import docker from '../../imgs/DockerPng.png'
import javaScript from '../../imgs/js.png'
import git from '../../imgs/git.png'
import css from '../../imgs/css.png'


const Experiencias = () => {

    const techs = [

        {
            id: 1,
            titulo: "Java",
            style: 'shadow-yellow-100 ',
            src: java
        },
        {
            id: 2,
            titulo: "Docker",
            style: 'shadow-blue-600 ',
            src: docker
        },
        {
            id: 3,
            titulo: "Git",
            style: 'shadow-red-500',
            src: git
        },
        {
            id: 4,
            titulo: "Css",
            style: 'shadow-blue-600',
            src: css
        },
        {
            id: 5,
            titulo: "React.js",
            style: 'shadow-cyan-400',
            src: react
        },

        {
            id: 6,
            titulo: "Linux",
            style: 'shadow-yellow-50',
            src: linux
        },
        {
            id: 7,
            titulo: "Spring-boot",
            style: 'shadow-green-700 ',
            src: spring
        },


        {
            id: 8,
            titulo: "Mysql",
            style: 'shadow-yellow-100',
            src:  mysql
        },
        {
            id: 9,
            titulo: "Mongodb",
            style: 'shadow-green-700',
            src: mongodb
        },
        {
            id: 10,
            titulo: "javaScript",
            style: 'shadow-yellow-500',
            src: javaScript
        },


    ]

    return (
        <div name='experiencias1' className='  bg-gradient-to-b from-gray-800 to-black w-full h-screen'>

            <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
                <div className='mt-48 lg:mt-16 -py-80'>
                    <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline '>Experiências</p>
                    <p className='py-6'>Essas são as tecnologias com as quias ja trabalhei</p>
                </div>

                <div className=' w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center  px-3 sm:px-0'>
               
               {
                techs.map(({id, titulo, src, style })=>(

                    <div key={id} className={`shadow-md hover:scale-105 duration-500 py-5 rounded-lg ${style}`}>
                       <img src={src} alt="" className='w-11 mx-auto mt-2' />
                        <p className='mt-1 font-semibold'>{titulo}</p>
                    </div>
                ))
               }
                </div>
            </div>


        </div>
    )
}

export default Experiencias
