import shapes from '../shared/images/transparentbackground.png';
import styled from 'styled-components';

export const PetBackground = styled.div`
  background-image: url(${shapes});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover; 
  height: 100vh;
`

export const PetTable = styled.table`
  border: 1px solid lightgrey;
  background-color: white;
  margin-left: auto;
  margin-right: auto;
  width: 60rem;
  width: rem;
`
export const Photo = styled.th`
  color: grey;
`
export const Name = styled.th`
  color: grey;
  font-weight: bold;
`
export const Weight = styled.th`
  color: grey;
`
export const Age = styled.th`
  color: grey !important;
  text-align: center;
  color: #;
`
export const Vet = styled.th`
border: 1px solid black;
`
export const Animal = styled.th`
  color: grey;
`
export const AgeOfPet = styled.th`
  color: grey;
    text-align: center !important;
`
export const Actions = styled.th`
    color: grey;
`
export const TopRow = styled.tr`
  border-bottom: 10px solid black;
`
export const PetRow = styled.tr`
  border-bottom: 5px solid red;
  text-align: left !important;
`
export const PetImage = styled.img`
  height: 50px;
  width: 85px;
  margin-right: 3rem;
  display: block;
  margin-left: auto;
  margin-right: auto;
`
export const PetImageTD = styled.td`
  margin-left: 3rem;
`
export const PetNameTD = styled.td`
  text-align: center !important;

`
export const PetName = styled.p`
  margin-bottom: 50px;
  font-weight: bold;
  color: grey;
  text-align: center !important;
`
export const PetActionTD = styled.td`
  text-align: center;
  color: grey;
  &:hover {
    cursor: pointer;
  }
`
export const PetAgeTD = styled.td`
  text-align: center;
`
export const PetAge = styled.p`
  color: grey;
`
export const PetSpeciesTD = styled.td`
  text-align: right !important;
  color: grey;
`
export const PetSpecies = styled.p`
  text-align: center !important;

`