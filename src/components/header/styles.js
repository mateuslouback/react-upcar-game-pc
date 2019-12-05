import styled from 'styled-components';

export const Header = styled.div`
  position: absolute;
  top: 10px;
  width: 100%;
  padding: 0 20px;
  display: flex;
  flex-direction: row;
  align-items: center;

  .player {
    margin-left: auto;
    display: flex;
    align-items: center;
  }

  span {
    font-size: 16px;
    background: -webkit-linear-gradient(#f56117, #f3b93d);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: #2a2240;
    text-transform: uppercase;
  }

  .margin-left-10 {
    margin-left: 10px;
  }

  .turbo {
    margin-left: 25px;
  }
`;
