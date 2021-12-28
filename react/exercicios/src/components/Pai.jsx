import React from "react";
import { childrenWithProps } from '../utils/util';

function Pai(props) {
  const { firstName, secondName } = props;
  return (
    <>
      <h1>{firstName} {secondName}</h1>
      <hr />
      <h2>Filhos</h2>
      <ul>
        {/* <Filho firstName="Pedro" secondName={secondName}/>
        <Filho {...props} />
        <Filho {...props} firstName="Carla" /> */}
        {childrenWithProps(props)}
        {/* {React.cloneElement(props.children, { ...props, ...props.children.props })} */}
      </ul>
    </>
  )
}

export default Pai;