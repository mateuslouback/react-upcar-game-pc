import styled from 'styled-components';
import panel from '../../assets/images/Panel_start.svg';
import input from '../../assets/images/input.svg';
import buttonStart from '../../assets/images/button_start.svg';

export const PanelStart = styled.div`
  background-image: url(${panel});
  background-size: contain;
  background-repeat: no-repeat;
  height: 600px;
  width: 450px;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 30px 50px;
  margin: 30px;

  h1 {
    color: #fff;
    font-size: 24px;
    margin-top: 50px;
    font-weight: bold;
  }

  img {
    height: 80px;
    width: auto;
    margin: 30px 20px;
    cursor: pointer;
  }

  .player:hover {
    opacity: 0.7;
  }

  button.btn-start {
    background-image: url(${buttonStart});
    height: 75px;
    width: 300px;
    background-size: 300px 75px;
    background-repeat: no-repeat;
    margin-top: 25px;
    background-color: transparent;
    border: none;
    cursor: pointer;
  }

  button.btn-start:hover {
    opacity: 0.7;
  }

  .selectedPlayer {
    border: solid 4px #f7bb00;
    padding: 8px;
  }
`;

export const Input = styled.input`
  height: 75px;
  width: 300px;
  padding: 0 15px;
  background-color: transparent;
  border: none;
  color: #fff;
  font-weight: bold;
  font-size: 24px;
  background-image: url(${input});
  background-size: 300px 75px;
  background-repeat: no-repeat;
  text-align: center;
  text-transform: uppercase;
  margin-top: 85px;
  line-height: 30px;

  ::placeholder {
    color: #fff;
  }
`;
