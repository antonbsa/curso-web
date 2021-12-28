// import React from 'react';
import ReactDOM from 'react-dom';

// import Primeiro from './components/Primeiro';
// import BomDia from './components/BomDia';

// import { BoaTarde, BoaNoite } from './components/Multiplos';
// import Multi, { BoaNoite } from './components/Multiplos';
// import Saudacao from './components/Saudacao';
import Pai from './components/Pai';
import Filho from './components/Filho';

ReactDOM.render(
  <Pai firstName="Paulo" secondName="Silva">
    {/* Child components here */}

    <Filho firstName="Pedro"/>
    <Filho firstName="Paulo"/>
    <Filho firstName="Carla"/>
  </Pai>,
  document.getElementById('root')
)