import Image from 'next/image'
import background from '../../public/images/Web-Cover.webp'

export default function Home() {
  return (
    <>
      <main className='w-screen h-screen relative overflow-y-auto'>
        <h1 className='absolute text-3xl z-20 font-light left-[26rem] top-[calc(100vh/2-1.5rem)] text-center h-0 shadow-lg'>proximamente...</h1>
        <h2 className='absolute text-6xl z-20 font-bold left-[18rem] top-[calc(100vh/2+2rem)] text-center h-0 shadow-lg text-orange'>TRoncosland</h2>
        <div className='w-full h-full opacity-30 bg-black absolute z-10' />
        <Image
          src={background}
          alt='Rust-Wallpaper'
          className='relative inline-block align-middle w-full'
        />
      </main>
    </>
  )
}
