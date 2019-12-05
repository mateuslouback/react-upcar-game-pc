import styled from 'styled-components';

export const Car = styled.img`
  position: absolute;
  bottom: 20px;
  transition: 0.5s;
  left: ${props => props.direction}px;
`;
