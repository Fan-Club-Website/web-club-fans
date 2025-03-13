import { NavLink } from 'react-router-dom';
import homePicture from '../assets/HomePicture.jpg';

function WelcomePage() {
    return (
        <>
            <div className='w-screen h-screen'>
                <img className="max-w-[87vw]" src={homePicture} alt="" />
            </div>
            {/* NavBar */}
            <nav className='fixed top-0 left-[25vw]'>
                <div className="container mx-auto px-4">
                    <ul className="flex justify-around items-center py-4">
                        <li
                            className='bg-[#510b31] rounded-2xl border-2 text-center border-[#2e071d] px-4 py-2 min-w-32 hover:bg-[#2e071d] shadow-2xl'>
                            <NavLink
                                to="/bio"
                                className="text-white hover:text-gray-300"
                            >
                                Biografía
                            </NavLink>
                        </li>
                        <li
                            className='bg-[hsl(327,76%,18%)] rounded-2xl text-center border-2 border-[#2e071d] px-4 py-2 min-w-32 hover:bg-[#2e071d] shadow-2xl'>
                            <NavLink
                                to="/agenda"
                                className="text-white hover:text-gray-300"
                            >
                                Agenda
                            </NavLink>
                        </li>
                        <li
                            className='bg-[hsl(327,76%,18%)] rounded-2xl text-center border-2 border-[#2e071d] px-4 py-2 min-w-32 hover:bg-[#2e071d] shadow-2xl'>
                            <NavLink
                                to="/chat"
                                className="text-white hover:text-gray-300"
                            >
                                Chat
                            </NavLink>
                        </li>
                        <li
                            className='bg-[hsl(327,76%,18%)] rounded-2xl text-center border-2 border-[#2e071d] px-4 py-2 min-w-32 hover:bg-[#2e071d] shadow-2xl'>
                            <NavLink
                                to="/multimedia"
                                className="text-white hover:text-gray-300"
                            >
                                Multimedia
                            </NavLink>
                        </li>
                        <li
                            className='bg-[hsl(327,76%,18%)] rounded-2xl text-center border-2 border-[#2e071d] px-4 py-2 min-w-32 hover:bg-[#2e071d] shadow-2xl'>
                            <NavLink
                                to="/store"
                                className="text-white hover:text-gray-300"
                            >
                                Tienda
                            </NavLink>
                        </li>
                        <li
                            className='bg-[hsl(327,76%,18%)] rounded-2xl text-center border-2 border-[#2e071d] px-4 py-2 min-w-32 hover:bg-[#2e071d] shadow-2xl'>
                            <NavLink
                                to="/news"
                                className="text-white hover:text-gray-300"
                            >
                                Noticias
                            </NavLink>
                        </li>
                        <li
                            className='text-center ml-20 mt-[-4vh]'>
                            <NavLink
                                to="/"
                                className="text-blue-600 hover:text-blue-400 underline text-xs"
                            >
                                Cerrar Sesion
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default WelcomePage;