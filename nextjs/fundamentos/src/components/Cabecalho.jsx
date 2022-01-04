export default function Cabecalho(props) {
  const { title } = props;

  return (
    <header>
      <h1>{title ?? 'Here is a cabecalho' }</h1>
    </header>
  )
}
