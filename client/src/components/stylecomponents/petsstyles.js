import shapes from '../shared/images/transparentbackground.png';
import styled from 'styled-components';

export const PetBackground = styled.div`
  background-image: url(${shapes});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover; 
  height: 100vh;
`