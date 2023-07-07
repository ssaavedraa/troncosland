import FaqItem from './FaqItem';

const faq = [
  {
    question: "¿Cuál es la tasa de saqueo en el servidor?",
    answer: "El servidor cuenta con una tasa de saqueo 2x, lo que significa que obtendrás el doble de recursos y botines en comparación con el juego estándar."
  },
  {
    question: "¿Qué significa que los administradores no son jugadores?",
    answer: "Nuestros administradores no participan activamente en el juego. Su función principal es garantizar la equidad y la integridad del servidor, sin obtener ventajas injustas sobre otros jugadores."
  },
  {
    question: "¿Cómo se asegura una jugabilidad equilibrada?",
    answer: "Nos esforzamos por ofrecer una jugabilidad equilibrada al optimizar la configuración del servidor y proporcionar un entorno desafiante donde la estrategia, la habilidad y la cooperación son fundamentales para sobrevivir."
  },
  {
    question: "¿El servidor tiene un buen rendimiento?",
    answer: "Sí, nos aseguramos de que nuestro servidor tenga un rendimiento estable y mínima latencia para brindarte una experiencia de juego fluida y sin interrupciones."
  },
  {
    question: "¿Cómo puedo unirme a la comunidad del servidor?",
    answer: "Para unirte a nuestra comunidad, simplemente ingresa a nuestro servidor y comienza a interactuar con otros jugadores. También puedes unirte a nuestro discord para conectarte con más entusiastas de Rust."
  },
  {
    question: "¿Qué tipo de soporte está disponible?",
    answer: "Nuestro equipo de soporte está disponible las 24 horas para ayudarte con cualquier problema o pregunta que puedas tener. Puedes comunicarte con nosotros a través de nuestro sistema de tickets de soporte en nuestro discord."
  }
];

export default function FAQ () {
  return (
    <section className='w-[90vw] 2xl:w-2/3 m-auto'>
      <h6 className='font-bold text-center xl:text-left text-3xl xl:text-6xl my-12 text-[#E9C46A]'>Preguntas Frecuentes</h6>
      {faq.map(({ question, answer }, index) => (
        <FaqItem question={question} answer={answer} key={index} />
      ))}
    </section>
  )
}