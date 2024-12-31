import React from "react";

export const Sobre = () => {
  return (
    <div
      id="sobre"
      className="w-full h-screen bg-gradient-to-b  to-black from-gray-800 text-white "
    >
      <div className="max-w-screen-lg p- mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8 max-sm:mt-72  md:mt-1 ">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 max-sm:m-36 ">
            Sobre
          </p>
        </div>

        <p className="mr-2 ml-2">
          Olá! Sou Elzo, desenvolvedor Back-End Jr. apaixonado por inovação. Com
          mais de 1 ano de experiência em HTML, CSS, Tailwind, React, Java,
          Spring Boot, Hibernate, JPA, MySQL, MongoDB, Docker e Linux, estou
          ansioso para: Aprofundar conhecimentos em arquitetura de sistemas
          Desenvolver soluções escaláveis e seguras Contribuir para projetos
          open-source Aprender novas tecnologias Colaborar em equipes ágeis e
          inovadoras
        </p>
        <br />
      </div>
    </div>
  );
};

export default Sobre;
