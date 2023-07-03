type CardProps = {
  title: string
  price: string
  features: string[]
}

export default function Card ({ title, price, features }: CardProps) {
  return (
    <div className='bg-[#034160] p-4 rounded-2xl m-4 w-[90%] xl:w-[30%] shadow-lg'>
      <strong className='block text-orange text-xl'>{title}</strong>
      <strong className='block text-3xl my-2'>${price} USD/Mes</strong>
      {features.map((feature, index) => (
        <div key={index} className='my-2'>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" className='inline-flex'><path fill='#FFF' d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"/></svg>
          <p className='inline ml-2'>{feature}</p>
        </div>
      ))}
      <button className='bg-yellow-400 text-[#034160] w-full rounded-lg px-6 py-2 mt-4'>¡Suscribirme!</button>
    </div>
  )
}