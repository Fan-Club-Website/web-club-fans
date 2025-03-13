import { Link } from 'react-router-dom';
import bioPicture from '../assets/BioPicture.jpg'

function BioPage() {
    return (
        <>
            <div className='max-h-screen overflow-hidden'>
                <div className='relative top-5 left-5 z-10  '>
                    <Link
                        to={'/welcome'}
                        className='bg-white pb-1 p-3 rounded-lg  '
                    >
                        <i class=" fa fa-home fa-2x"
                        ></i>
                    </Link>
                </div>
                <div className="">
                    <img
                        className='w-screen relative top-[-15vh]'
                        src={bioPicture} alt="" />
                </div>
                <div className='relative top-[-90vh] left-80 max-w-[55vw] max-h-[100vh] bg-[rgba(255,255,255,0.25)]'>
                    <p
                        className='overflow-scroll overflow-x-hidden max-h-[60vh]'
                    >JADEL
                        Javier Luis Delgado, más conocido como Jadel. Cantante, compositor y actor de 28 años natural de Santa Cruz de Tenerife,
                        conocido a raíz de ganar el programa de Antena 3 "Número 1" en 2012 ha desarrollado su carrera artística en los últimos años en el campo del pop y ritmos latinos. Previamente participó en otro programa de televisión "Factor X" en 2008 y posteriormente colaboró en programas como “Tu cara me suena” o “Dando la Nota”.
                        Representó a España en los Premios Estrella Music Awards Miami, ganando el festival en el que participaron más de 30 artistas en representación de sus países en el año 2010.
                        Ha compartido escenario con importantes artistas internacionales como Franco de Vita, Miguel Bosé, Natalia Jiménez, Luis Fonsi, Rasel o David Bustamante, entre otros. Su canción “Qué más da” alcanzó el número 1 de ventas a nivel mundial en iTunes. La colaboración con la canción "Viven" junto a Rasel se mantuvo durante 28 semanas en los primeros puestos de la listas más influyentes, con más de dos millones de visitas en YouTube y un gran éxito en ventas, al mismo tiempo se convierte en uno de los artistas más seguidos en las redes sociales. En el 2014 protagoniza "Jesucristo Superstar" dirigido por el afamado director español Jaime Azpilicueta, en 1975 esta obra la estrenó Camilo Sesto con el mismo director. En 2015 protagonizó otra gran obra musical "EVITA" en el papel del Che Guevara, Jadel se estrena en el mundo del teatro con estas maravillosas obras de Andrew Lloyd Webber.


                        2008 Concursante Factor X
                        2010 Ganador Premio Estrella Music Awards (Miami)
                        2011 "Dentro del alma" (Álbum)
                        2012 Ganador Numero 1 (Antena 3)
                        2013 "Viven" single junto a Rasel. Premio mejor canción del verano y record de permanencia en la lista 40 Principales.
                        2014 "Dile que tu" single. Nominado a "Mejor canción" en los Premios Neox Fan Awards.
                        2015 "Llévame" (Álbum)
                        Actualmente protagonista de "Evita, el musical" en Nuevo Teatro Alcalá (Madrid)</p>
                </div>
            </div>
        </>
    )
}

export default BioPage;