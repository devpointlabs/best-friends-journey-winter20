// import PetForm from './PetForm';
import PetList from './PetList';
import { PetConsumer } from '../../providers/PetProvider';
import { useEffect } from 'react';

const Pets = ({ getAllPets, pets, deletePet }) => {
    useEffect( () => {                  
        getAllPets()
    }, [])
    
    return (
        <>
            <h1> Pets </h1>
            {/* <PetsForm addPet={value.addPet} /> */}
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