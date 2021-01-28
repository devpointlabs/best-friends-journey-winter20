import { List } from 'semantic-ui-react';	
import { Link } from 'react-router-dom';	
import Pet from './Pet';	

const PetList = ({ pets, deletePet }) => (	
  <List divided relaxed>	
    <List.Item>	
      <List.Content>	
        { pets.map( p => 	
          <Pet	
            petId={p.id}	
            {...p} 	

            deletePet={deletePet}	
          />	
        )}	
      </List.Content>	
    </List.Item> 	
  </List>	
)	

export default PetList; 
