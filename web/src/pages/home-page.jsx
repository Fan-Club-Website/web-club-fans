import { Link } from 'react-router-dom';
// import homeGuessPicture from '../assets/BioPicture.jpg'
import homePicture from '../assets/HomePicture.jpg';

function HomePage() {
    return (
        <>
            <div className='w-[100vw] h-[100vh]'>
                <img className='max-w-[87vw]' src={homePicture} alt="" />
                <div className='fixed top-[60vh] left-[45vw] flex flex-col gap-4'>
                    <Link to={'/login'}
                        style={{"borderColor":"#4F0B30"}}
                        className='border-2 text-center p-2 rounded-2xl hover:bg-[#4F0B30] hover:text-white'>
                        Iniciar Sesion
                    </Link>
                    <Link to={'/register'}
                        style={{"borderColor":"#4F0B30"}}
                        className='border-2 text-center p-2 rounded-2xl hover:bg-[#4F0B30] hover:text-white'>
                        Registrate
                    </Link>
                </div>
            </div>
        </>
    )
}

export default HomePage;