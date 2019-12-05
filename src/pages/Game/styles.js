import styled from 'styled-components';
import machine from '../../assets/images/machine.svg';

export const Machine = styled.div`
  background-image: url(${machine});
  background-size: contain;
  background-repeat: no-repeat;
  height: 600px;
  width: 740px;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 30px;
  margin: 40px;
`;

export const Scenery = styled.div`
  position: relative;
  background-image: url(${props => props.cartrack});
  background-size: cover;
  background-repeat: no-repeat;
  background-position-y: -140px;
  height: 415px;
  width: 590px;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 4px;
  margin-left: -4px;
  display: flex;
  justify-content: center;
  align-items: center;

  #countdown {
    font-size: 70px;
    background: -webkit-linear-gradient(#f56117, #f3b93d);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

export const Shortcuts = styled.img`
  position: absolute;
  right: 20px;
  bottom: 20px;
`;
