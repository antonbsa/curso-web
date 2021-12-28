import React from 'react';

function BomDia(props) {
  return [
    <h1 key='h1'>Bom dia papae: {props.name}</h1>,
    <h2 key='h2'>Até breve</h2>
  ];
}

export default BomDia;

// export default props => (
//   <Fragment>
//     <h1>Bom dia papae: {props.name}</h1>
//     <h2>Até breve</h2>
//   </Fragment>
// )