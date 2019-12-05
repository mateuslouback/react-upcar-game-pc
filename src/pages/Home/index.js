import React from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Import Styled Components
import { PanelStart, Input } from './styles';

// Import local files
import playerOne from '../../assets/images/1.svg';
import playerTwo from '../../assets/images/2.svg';
import playerTree from '../../assets/images/3.svg';
import playerFour from '../../assets/images/4.svg';
import startMP3File from '../../assets/sounds/start.mp3';
import selectPalyerMP3File from '../../assets/sounds/select_player.mp3';
import musicMP3File from '../../assets/sounds/music.mp3';

toast.configure();

export default function Home() {
  const audioStartMP3File = new Audio(startMP3File);
  const audioSelectPalyerMP3File = new Audio(selectPalyerMP3File);
  const audioSelectmusicMP3File = new Audio(musicMP3File);

  audioSelectmusicMP3File.play();

  // Function start player
  const startPlayer = () => {
    if (document.getElementById('namePlayer').value === '') {
      toast.error('Enter player name.');
    } else if (localStorage.getItem('@UpCar:imageplayer') === null) {
      toast.error('Select a player.');
    } else {
      audioStartMP3File.play();
      const namePlayer = document.getElementById('namePlayer').value;
      localStorage.setItem('@UpCar:nameplayer', namePlayer);
      setTimeout(function() {
        window.location.href = '/game';
      }, 3000);
    }
  };

  // Function select player
  const selectPlayer = e => {
    audioSelectPalyerMP3File.play();
    localStorage.setItem('@UpCar:imageplayer', e);
    toast.success('Player selected.');
  };

  return (
    <PanelStart>
      <Input id="namePlayer" type="text" placeholder="PLAYER NAME" />
      <h1>SELECT A PLAYER</h1>
      <div>
        <img
          className="player"
          src={playerOne}
          onClick={() => selectPlayer(playerOne)}
        />
        <img
          className="player"
          src={playerTwo}
          onClick={() => selectPlayer(playerTwo)}
        />
        <img
          className="player"
          src={playerTree}
          onClick={() => selectPlayer(playerTree)}
        />
        <img
          className="player"
          src={playerFour}
          onClick={() => selectPlayer(playerFour)}
        />
      </div>
      <button className="btn-start" onClick={startPlayer} />
    </PanelStart>
  );
}
