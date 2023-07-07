import Image from 'next/image';
import tronco from '../../../public/images/Tronco.png'

export default function Welcome () {
  return (
    <section className='flex flex-col xl:flex-row w-[90vw] 2xl:w-2/3 m-auto items-center'>
      <div className='w-full xl:w-1/2'>
        <h3 className='font-bold text-center xl:text-left text-3xl xl:text-6xl my-12 text-[#E9C46A]'>¡Saludos desde TRoncosland!</h3>
        <p className='text-xl'>¡Bienvenido al mejor servidor de juego de Rust en LATAM, donde te espera la aventura y la emoción! Nuestro servidor ofrece una experiencia de juego única diseñada específicamente para entusiastas de Rust en América Latina y más allá. Con nuestra configuración optimizada, que incluye saqueo 2X y administradores no jugadores, disfrutarás de una jugabilidad justa y encuentros emocionantes mientras luchas por sobrevivir en el despiadado mundo de Rust.</p>
      </div>
      <Image
        className='w-full xl:w-1/2'
        src={tronco}
        alt='Tronco'
      />
    </section>
  )
}