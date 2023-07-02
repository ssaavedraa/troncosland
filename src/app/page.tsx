import Image from 'next/image'
import background from '../../public/images/Web-Cover.webp'

export default function Home() {
  return (
    <>
      <main className='w-screen max-h-[90vh] relative overflow-y-clip overflow-x-hidden flex items-center'>
        <h1 className='absolute text-base xl:text-3xl z-20 font-light left-[calc(100vw/2-200px+75px)] xl:left-[calc(100vw/2-500px+110px)] top-[calc(50%-2rem)] xl:top-[calc(50%-1.5rem)] text-center h-0 shadow-lg w-[150px] xl:w-[280px]'>proximamente...</h1>
        <h2 className='absolute text-2xl xl:text-6xl z-20 font-bold left-[calc(100vw/2-150px)] xl:left-[calc(100vw/2-500px)] top-[calc(50%-0.5rem)] xl:top-[calc(50%+2rem)] text-center h-0 shadow-lg text-orange w-[200px] xl:w-[500px]'>TRoncosland</h2>
        <div className='w-full h-full opacity-30 bg-black absolute z-10' />
        <Image
          src={background}
          alt='Rust-Wallpaper'
          className='relative inline-block align-middle max-w-[120%] xl:max-w-full xl:w-full'
        />
      </main>
    </>
  )
}
