import React from 'react';

import { Car } from './styles';

export default function car(props) {
  return <Car src={props.car} height="120" direction={props.direction} />;
}
