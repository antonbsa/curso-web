function BoaTarde(props) {
  const { name } = props;
  return <h1>Boa tarde {name}</h1>
}

function BoaNoite(props) {
  const { name } = props;
  return <h1>Boa noite {name}</h1>
}

export { BoaTarde, BoaNoite };

// export default BoaTarde;
export default {
  BoaTarde,
  BoaNoite,
}