import Image from 'next/image'
import background from '../../public/images/Web-Cover.webp'
import Welcome from '@/components/Welcome/Welcome'
import Subscriptions from '@/components/Subscriptions/Subscriptions'
import Footer from '@/components/Footer/Footer'
import FAQ from '@/components/FAQ/FAQ'
import Link from 'next/link'
import Discord from '@/components/Icons/Discord'

export default function Home() {
  return (
    <>
      <main className='w-screen max-h-[90vh] relative overflow-y-clip overflow-x-hidden flex items-center'>
        <h1 className='absolute text-base xl:text-3xl z-20 font-light left-[calc(100vw/2-200px+75px)] xl:left-[calc(100vw/2-500px+110px)] top-[calc(50%-2rem)] xl:top-[calc(50%-1.5rem)] text-center h-0 shadow-lg w-[150px] xl:w-[280px]'>Bienvenido a</h1>
        <h2 className='absolute text-2xl xl:text-6xl z-20 font-bold left-[calc(100vw/2-150px)] xl:left-[calc(100vw/2-500px)] top-[calc(50%-0.5rem)] xl:top-[calc(50%+2rem)] text-center h-0 shadow-lg text-orange w-[200px] xl:w-[500px]'>TRoncosland</h2>
        <div className='w-full h-full opacity-30 bg-black absolute z-10' />
        <Image
          src={background}
          alt='Rust-Wallpaper'
          className='relative inline-block align-middle max-w-[120%] xl:max-w-full xl:w-full'
          priority
        />
        <Link href='https://discord.gg/PSEBwh6h9p' target='_blank' className='absolute z-20 inline-flex items-center bg-[#5865F2] py-[0.15rem] px-2 rounded-md top-[calc(50%+2.5rem)] xl:top-[calc(50%+7rem)] left-[calc(100vw/2-160px)] xl:left-[calc(50vw-367px)] w-[220px] xl:w-[240px] text-sm xl:text-base'>
          <Discord width={18} height={18}/>
          <span>
            Unete a nuestro Discord
          </span>
        </Link>
      </main>
      <Welcome />
      <Subscriptions />
      <FAQ />
      <Footer />
    </>
  )
}
