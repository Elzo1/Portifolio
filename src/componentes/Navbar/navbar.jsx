import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Navbar = () => {
    const [menuAberto, setMenuAberto] = useState(false);

    const alternarMenu = () => {
        setMenuAberto(!menuAberto);
    };

    const links = [
        { id: 1, texto: 'Home', to: 'home' },
        { id: 2, texto: 'Sobre', to: 'sobre' },
        { id: 3, texto: 'Projetos', to: 'projetos' },
        { id: 4, texto: 'Experiencias', to: 'experiencias' },
        { id: 5, texto: 'Contato', to: 'contato' },
    ];

    return (
        <div className='w-full fixed z-10 bg-gradient-to-b from-black to-gray-900 text-white'>
            <div className='flex items-center justify-between max-w-screen-lg mx-auto px-4 h-16'>
                <div>
                    <h1 className='text-3xl font-bold text-cyan-400'>MeuPortfólio</h1>
                </div>
                {/* Links do menu para telas grandes */}
                <ul className='hidden md:flex'>
                    {links.map(({ id, texto, to }) => (
                        <li
                            key={id}
                            className='px-4 cursor-pointer font-medium text-gray-300 hover:scale-105 hover:text-white duration-200'
                        >
                            <Link to={to} smooth duration={500}>
                                {texto}
                            </Link>
                        </li>
                    ))}
                </ul>
                {/* Ícone do menu para telas pequenas */}
                <div
                    onClick={alternarMenu}
                    className='cursor-pointer text-gray-400 md:hidden hover:text-white duration-200'
                >
                    {menuAberto ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
                </div>
            </div>

            {/* Menu responsivo */}
            {menuAberto && (
                <ul className='flex flex-col items-center absolute top-16 left-0 w-full bg-gradient-to-b from-black to-gray-900 md:hidden'>
                    {links.map(({ id, texto, to }) => (
                        <li
                            key={id}
                            className='px-4 py-2 text-gray-300 cursor-pointer hover:scale-105 hover:text-white duration-200'
                        >
                            <Link
                                to={to}
                                smooth
                                duration={500}
                                onClick={() => setMenuAberto(false)}
                            >
                                {texto}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Navbar;
