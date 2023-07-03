import Image from 'next/image';
import Link from 'next/link';

export default function Footer () {
  return (
    <>
      <hr className='w-2/3 m-auto my-6 opacity-30'/>
      <footer className='w-screen flex flex-wrap items-center justify-center'>
        <div className='w-full'>
          <small className='text-center block'>Desarrollado por:</small>
          <Link href='https://santiagosaavedra.com.co'>
            <Image
              className='h-full min-h-[80px] m-auto'
              src='https://s3.amazonaws.com/santiagosaavedra.com.co/Firma-02.svg'
              alt='Santiago_Saavedra_Logo'
              width={264}
              height={80}
              priority
            />
          </Link>
        </div>
        <small className=' my-2'>&copy; TroncosLand 2023</small>
      </footer>
    </>
  )
}