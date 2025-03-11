function Navbar() {
    return (
        <>
        {/* Navbar */}
        <div className='border-2 w-[75vw] h-[8vh] flex'>
                <div className='border-red-600 border-2 flex-1 text-center'>
                    <Link to={"/bio"} >
                        Bio
                    </Link>
                </div>
                <div className='border-red-600 border-2 flex-1 text-center'>
                    <Link to={"/news"} >
                        Noticias
                    </Link>
                </div>
                <div className='border-red-600 border-2 flex-1 text-center'>
                    <Link to={"/agenda"} >
                        Agenda
                    </Link>
                </div>
                <div className='border-red-600 border-2 flex-1 text-center'>
                    <Link to={"Bio"} >
                        Musica
                    </Link>
                </div>
                <div className='border-red-600 border-2 flex-1 text-center'>
                    <Link to={"Bio"} >
                        Videos
                    </Link>
                </div>
                <div className='border-red-600 border-2 flex-1 text-center'>
                    <Link to={"Bio"} >
                        Area Socios
                    </Link>
                </div>
                <div className='border-red-600 border-2 flex-1 text-center'>
                    <Link to={"Bio"} >
                        Tienda
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Navbar;