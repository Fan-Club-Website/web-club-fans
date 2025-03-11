import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom'
import loginPicture from '../assets/LoginPicture.jpg';

function LoginPage() {
    
    const { register, handleSubmit } = useForm();

    const handleLogin = (user) => { console.log(user) }

    return (
        <>
            <div className="relative overflow-hidden h-screen">
                <img
                    src={loginPicture}
                    className="absolute inset-0 w-full object-fit justify-self-center"
                />
                <div className='z-10 top-8 relative left-2'>
                <Link
                    to={'/'}
                    className='bg-white pb-1 p-3 rounded-lg  '
                >
                    <i class=" fa fa-home fa-2x"
                    ></i>
                </Link>
            </div>
                <div className="relative top-[20vh] left-[65vw] z-10 flex items-center justify-center min-h-screen max-w-[30vw]">
                    <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
                        <h2 className="text-2xl font-bold text-center">Iniciar Sesión</h2>
                        <form className="mt-8 space-y-6" onSubmit={handleSubmit(handleLogin)}>
                            <div className="rounded-md shadow-sm -space-y-px">
                                <div>
                                    <label htmlFor="email" className="sr-only">
                                        Correo Electrónico
                                    </label>
                                    <input
                                        type="email"
                                        // required 
                                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-[hsl(327,76%,18%)] focus:border-[hsl(327,76%,18%)] sm:text-sm"
                                        placeholder="usuario@ejemplo.com"
                                        {...register("email")}
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="password" className="sr-only">
                                    Contraseña
                                </label>
                                <input
                                    type="password"
                                    // required
                                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-[hsl(327,76%,18%)] focus:border-[hsl(327,76%,18%)] sm:text-sm"
                                    placeholder="Introduce tu contraseña"
                                    {...register("password")}

                                />
                            </div>
                            {/* TODO: //Add a password recovery 
                            <div>
                                <p className='text-xs ml-20'
                                >He olvidado mi contraseña</p>
                            </div> */}
                            <div>
                                <button
                                    type="submit"
                                    className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[hsl(326,90%,28%)] hover:bg-[hsl(327,76%,18%)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[hsl(320,100%,38%)]"
                                >
                                    Iniciar Sesión
                                </button>
                            </div>
                            <div>
                                <Link  
                                to={'/register'}
                                className='ml-30 text-blue-700 underline hover:text-blue-500'>
                                    Registrarse
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LoginPage;