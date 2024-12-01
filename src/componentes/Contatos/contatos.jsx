import React from 'react';
import emailjs from 'emailjs-com';

const Contatos = () => {
  
  const enviarEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_6kft4uu',  // Substitua pelo seu Service ID do EmailJS
      'template_ext70tp', // Substitua pelo seu Template ID do EmailJS
      e.target,
      'yvMoqI5SVRG56Oeoc'   // Substitua pela sua Chave Pública
    ).then(
      (result) => {
        alert('Mensagem enviada com sucesso!');
        e.target.reset();
      },
      (error) => {
        alert('Erro ao enviar a mensagem. Verifique sua conexão ou tente novamente.');
        console.error('Erro ao enviar:', error);
      }
    );
  };

  return (
    <div className="w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white">
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="mt-44">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">Contato</p>
        </div>
        <div className="flex justify-center items-center py-6">
          <form onSubmit={enviarEmail} className="flex flex-col w-full md:w-1/2">
            <input
              type="text"
              name="user_name"
              placeholder="Digite seu nome"
              className="h-10 bg-transparent border-2 rounded-md text-white focus:outline-none my-2 p-2"
              required
            />
            <input
              type="email"
              name="user_email"
              placeholder="Digite seu e-mail"
              className="h-10 bg-transparent border-2 rounded-md text-white focus:outline-none my-2 p-2"
              required
            />
            <textarea
              name="message"
              rows="5"
              placeholder="Escreva sua mensagem"
              className="bg-transparent border-2 rounded-md text-white focus:outline-none my-2 p-2"
              required
            ></textarea>

            {/* E-mails Destinatários Ocultos */}
            <input
              type="hidden"
              name="to_email"
              value="ticobala100@gmail.com, elzosantos006@gmail.com"
            />

            <button
              type="submit"
              className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-4 mx-auto flex items-center rounded-md hover:scale-110 duration-300"
            >
              Enviar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contatos;
