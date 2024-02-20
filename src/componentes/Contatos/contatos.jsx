import React from 'react'

const contatos = () => {
    return (
        <div name='Contato' className='w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white'>
            <div className='flex flex-col p-4 justify-center max-w-screen max-h-screen-lg mx-auto h-full w-full'>
                <div className='mt-44'>
                    <p className='  text-4xl font-bold inline border-b-4 border-gray-500 lg:m-72'>Contato</p>
                </div>
                <div className='flex justify-center items-center py-6'>
                    <form action="https://getform.io/f/QbYjgKdz" method="POST" className='flex flex-col w-full md:w-1/2'>
                        <input className=" h-10  border-none shadow-sm shadow-gray-500 my-4 bg-transparent border-2 rounded-md
                         text-white focus:outline-none" type="text" name="nome"
                          placeholder="Digte seu nome "></input>

                        <input className=" h-10  border-none shadow-sm shadow-gray-500 mb-4 bg-transparent border-2 rounded-md
                         text-white focus:outline-none" type="text" name="E-mail"
                          placeholder="Digte seu e-mail "></input>

                        <textarea name="menssagem" rows="10" className='h-28  bg-transparent border-2 rounded-md   border-none shadow-md shadow-gray-500
                         text-white focus:outline-none' placeholder='Escreva sua menssagem' ></textarea>
                        
                        <button className=' text-white bg-gradient-to-b from-cyan-500
                         to-blue-500 px-6 py-3 my-4 mx-auto flex items-center
                           rounded-md hover:scale-110 duration-300 '>Enviar</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default contatos
