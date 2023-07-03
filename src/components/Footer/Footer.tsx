import Image from 'next/image';
import Link from 'next/link';
import Discord from '../Icons/Discord';
import Instagram from '../Icons/Instagram';

export default function Footer () {
  return (
    <>
      <hr className='w-2/3 m-auto my-6 opacity-30'/>
      <footer className='w-screen flex flex-wrap items-center justify-center mb-8'>
        <div className='w-full flex flex-row flex-nowrap justify-center items-center'>
          <small className='m-2 w-1/2 text-center'>&copy; TroncosLand 2023</small>
          <div className='w-1/2 flex flex-row flex-nowrap items-center justify-center h-10'>
            <Link href='https://discord.gg/45GP2QCn' target='_blank'>
              <Discord />
            </Link>
            <Link href='https://www.instagram.com/' target='_blank'>
              <Instagram />
            </Link>
          </div>
        </div>
        <div className='w-full'>
          <small className='text-center block'>Web desarrollada por:</small>
          <Link href='https://santiagosaavedra.com.co' target='_blank'>
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
      </footer>
    </>
  )
}