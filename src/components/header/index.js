import React from 'react';

import { Header } from './styles';

export default function header(props) {
  const imagePlayer = localStorage.getItem('@UpCar:imageplayer');
  const namePlayer = localStorage.getItem('@UpCar:nameplayer');

  return (
    <Header>
      <div className="pause">
        <span>{props.playPause}</span>
      </div>

      <div className="turbo">
        <span>TURBO = T</span>
      </div>

      <div className="player">
        <img src={imagePlayer} height="45" />
        <span className="margin-left-10">{namePlayer}</span>
      </div>
    </Header>
  );
}
