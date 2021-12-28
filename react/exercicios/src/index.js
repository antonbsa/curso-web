// import React from 'react';
import ReactDOM from 'react-dom';

// import Primeiro from './components/Primeiro';
// import BomDia from './components/BomDia';

// import { BoaTarde, BoaNoite } from './components/Multiplos';
import Multi, { BoaNoite } from './components/Multiplos';

ReactDOM.render(
  <>
    <Multi.BoaTarde name="Bia" />
    <BoaNoite name="Ana" />
  </>,
  document.getElementById('root')
)