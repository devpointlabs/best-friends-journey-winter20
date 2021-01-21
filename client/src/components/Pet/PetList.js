import { List } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import Pet from './Pet';

const PetList = ({ pets }) => (
  <>
    { pets.map( p => 
     <Pet
        petId={p.id}
        {...p}
        />
    )}
  </>
)

export default PetList;