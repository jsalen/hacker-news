import './styles.css'

interface Props {
  message: string
}

export const Message = ({ message }: Props) => {
  return (
    <section className='message'>
      <h2>{message}</h2>
    </section>
  )
}
