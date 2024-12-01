import React from 'react';
import {
  SiSpringsecurity,
  SiHibernate,
  SiMysql,
  SiSpringboot,
  SiJsonwebtokens,
} from 'react-icons/si';
import { GrDocker } from 'react-icons/gr';
import { FaGitSquare } from 'react-icons/fa';

const Projetos = () => {
  // Array de projetos, cada projeto possui suas propriedades como título, descrição, tecnologias e link.
  const projetos = [
    {
      id: 1,
      titu2: 'E-commerce',
      par: 'Projeto de back-end para e-commerce com autenticação, segurança e eficiência.',
      titu: 'Tecnologias usadas:',
      imgs: (
        <>
          <SiSpringboot size={50} className="text-green-700 px-1 hover:scale-105 duration-200" />
          <SiHibernate size={50} className="text-blue-950 px-1 hover:scale-105 duration-200" />
          <SiMysql size={60} className="text-blue-700 px-1 hover:scale-105 duration-200" />
          <SiSpringsecurity size={50} className="text-green-700 px-1 hover:scale-105 duration-200" />
          <SiJsonwebtokens size={50} className="text-gray-950 px-1 hover:scale-105 duration-200" />
          <GrDocker size={50} className="text-blue-700 px-1 hover:scale-105 duration-200" />
          <FaGitSquare size={50} className="hover:text-red-600 hover:scale-105 duration-200" />
        </>
      ),
      link: 'https://github.com/Elzo1/Loja-Virtual-Back-End', // Link para o repositório do projeto
    },
    {
      id: 2,
      titu2: 'PDV',
      par: 'Projeto de back-end para PDV de vendas com Spring Security e JWT. Suporta múltiplos usuários com associação por ID.',
      titu: 'Tecnologias usadas:',
      imgs: (
        <>
          <SiSpringboot size={50} className="text-green-700 px-1 hover:scale-105 duration-200" />
          <SiHibernate size={50} className="text-blue-950 px-1 hover:scale-105 duration-200" />
          <SiMysql size={60} className="text-blue-700 px-1 hover:scale-105 duration-200" />
          <SiSpringsecurity size={50} className="text-green-700 px-1 hover:scale-105 duration-200" />
          <SiJsonwebtokens size={50} className="text-gray-950 px-1 hover:scale-105 duration-200" />
          <FaGitSquare size={50} className="hover:text-red-600 hover:scale-105 duration-200" />
        </>
      ),
      link: 'https://github.com/Elzo1/PDV-de-vendas-de-produtos-/tree/main/src', // Link para o repositório do projeto
    },
    {
      id: 3,
      titu2: 'Sistema de Cadastro de Pessoas',
      par: 'Sistema CRUD para gerenciar informações de indivíduos usando Java e MySQL.',
      titu: 'Tecnologias usadas:',
      imgs: (
        <>
          <SiSpringboot size={50} className="text-green-700 px-1 hover:scale-105 duration-200" />
          <SiHibernate size={50} className="text-blue-950 px-1 hover:scale-105 duration-200" />
          <SiMysql size={60} className="text-blue-700 px-1 hover:scale-105 duration-200" />
          <GrDocker size={50} className="text-blue-700 px-1 hover:scale-105 duration-200" />
          <FaGitSquare size={50} className="hover:text-red-600 hover:scale-105 duration-200" />
        </>
      ),
      link: 'https://github.com/Elzo1/Sistema-de-Cadastro-de-Pessoas', // Link para o repositório do projeto
    },
  ];

  return (
    <div id="projetos" className="bg-gradient-to-b from-black to-gray-800 w-full text-white min-h-screen">
      {/* Seção de Projetos */}
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        {/* Título da Seção */}
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">Projetos</p>
          <p className="py-6">Confira alguns projetos aqui</p>
        </div>
        {/* Grid de Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4">
          {projetos.map(({ id, imgs, titu, par, titu2, link }) => (
            <div
              key={id}
              className="hover:border-y-2 shadow-2xl hover:shadow-gray-600 hover:scale-105 duration-500 rounded-2xl p-4 bg-gray-900 w-full sm:w-[90%] max-w-sm mx-auto"
            >
              {/* Título do Projeto */}
              <h2 className="mt-2 font-semibold text-3xl">{titu2}</h2>
              {/* Descrição do Projeto */}
              <p className="mt-5">{par}</p>
              {/* Tecnologias Usadas */}
              <p className="mt-3">{titu}</p>
              {/* Ícones das Tecnologias */}
              <div className="flex mt-2">{imgs}</div>
              {/* Botão para o Código */}
              <a href={link} target="_blank" rel="noopener noreferrer">
                <button className="text-white w-fit px-4 py-2 my-3 rounded-md bg-gradient-to-r from-cyan-400 to-blue-600 font-semibold hover:scale-110 duration-300 shadow-md">
                  Ir para o Código
                </button>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projetos;
