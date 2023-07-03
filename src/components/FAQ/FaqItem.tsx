import Link from 'next/link'

type FaqItemProps = {
  question: string,
  answer: string
}

export default function FaqItem ({ question, answer }: FaqItemProps) {
  const answerWithLinks = (answer: string) => {
    if (answer.includes('nuestro discord')) {
      const splittedByKeyword = answer.split('nuestro discord')

      return <p>{splittedByKeyword[0]}<Link href='https://discord.gg/45GP2QCn' target='_blank' className='text-[#E9C46A]'>nuestro discord</Link>{splittedByKeyword[1]}</p>
    }

    return <p>{answer}</p>
  }

  return (
    <div className='my-4'>
      <strong className='mt-6 mb-2 block text-3xl text-[#2A9D8F]'>{question}</strong>
      {answerWithLinks(answer)}
    </div>
  )
}