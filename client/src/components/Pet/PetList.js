import { List } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import Pet from './Pet';

const PetList = ({ pets, deletePet }) => (
  <>
    { pets.map( p => 
     <Pet
        petId={p.id}
        {...p}
        deletePet={deletePet}
        />
    )}
  </>
)

export default PetList;