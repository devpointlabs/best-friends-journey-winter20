import { List } from 'semantic-ui-react';	
import { Link } from 'react-router-dom';	
import Pet from './Pet';
import { PetRow } from '../stylecomponents/petsstyles';

const PetList = ({ pets, deletePet }) => (	
  <>	
    {pets.map(p => 	
      <PetRow>
        <Pet	
          petId={p.id}	
          {...p} 	
          deletePet={deletePet}	
        />	
      </PetRow>
    )}		
  </>	
)	
export default PetList; 