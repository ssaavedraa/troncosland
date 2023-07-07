import { features } from 'process'
import Card from '../Card/Card'
import Link from 'next/link'

const subscriptions = [
  {
    title: 'Tronco VIP',
    price: '9.99',
    features: ['Acceso básico', 'Soporte 24/7', '2 juegos', 'Actualizaciones']
  },
  {
    title: 'Tronco elite',
    price: '19.99',
    features: ['Acceso básico', 'Soporte 24/7', '2 juegos', 'Actualizaciones']
  }
]

export default function Subscriptions () {
  return (
    <section className='w-[90vw] 2xl:w-2/3 m-auto my-6'>
        <div className='my-8 flex flex-col xl:flex-row overflow-x-auto flex-wrap items-center justify-center'>
          {subscriptions.map(({ title, price, features }, index) => <Card key={index} title={title} price={price} features={features} />)}
          <small className='w-full text-[#2A9D8F] text-center'>En nuestro servidor, la diversión y la igualdad son nuestra máxima prioridad. No es un &quot;pay to win&quot;, es una experiencia inigualable.</small>
        </div>
      <p className='text-lg'>Al apoyar nuestro servidor con una suscripción, nos ayudarás a mantener y mejorar constantemente la calidad del servicio. Invertiremos los recursos adicionales para brindarte un rendimiento óptimo, eventos emocionantes y nuevas funciones que harán que tu tiempo en Rust sea verdaderamente inolvidable.</p>
    </section>
  )
}