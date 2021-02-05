import PetList from './PetList';
import PetForm from './PetForm';
import { PetConsumer } from '../../providers/PetProvider';
import { useEffect, useState } from 'react';
import { NewPetButton } from '../stylecomponents/NavStyles';

const Pets = ({ getAllPets, pets, deletePet, }) => {
  const [ adding, setAdding ] = useState(false);

    useEffect( () => {                  
        getAllPets()
    }, [])
    
    return (
        <>
            <h1> My Pets </h1>
            {/* <PetsForm addPet={value.addPet} /> */}
            <NewPetButton onClick={() => setAdding(!adding)}>  +  Add  New  Pet</NewPetButton>
            { adding && <PetForm /> }
            <PetList 
                pets={pets} 
                deletePet={deletePet}
            />
        </>
    )
}


const ConnectedPets = (props) => (
    <PetConsumer>
        { value => (
            <Pets {...props} {...value} />
        )}
    </PetConsumer>
)

export default ConnectedPets;
