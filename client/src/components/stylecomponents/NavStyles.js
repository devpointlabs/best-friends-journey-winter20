import styled from 'styled-components';
import { Menu } from 'semantic-ui-react';
import font from '../../App.js';

export const NavMenu = styled(Menu)`
  height: 80px;
  background: #231F20 !important;
  padding: 15px 0;
  display: flex;
  align-items: center;
  
`
export const FooterContainer = styled.div`
  height: 80px;
  background: #231F20 !important;
  font-family: 'Quicksand', sans-serif;
  position: fixed;
  left:0;
  bottom:0;
  right:0;
  text-align: center;
  color: white;
  font-family: quicksand;
  font-size: 19px;
  display: grid;
  place-content: center;

`
export const NavagationLink = styled(Menu.Item)`
  font-color: #FFFFFF;
  font-family: 'Quicksand', sans-serif;
  text-align: center;
  font-size: 19px;
  justify: center;
  color: palevioletred;
  color:white !important;
  padding: 10em;
  font-align: center;
  background: #FEFFF2
`