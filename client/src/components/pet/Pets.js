import PetList from './PetList';
import PetForm from './PetForm';
import { PetConsumer } from '../../providers/PetProvider';
import { useEffect, useState } from 'react';
import { NewPetButton } from '../stylecomponents/NavStyles';
import { PetTable, TopRow, Photo, Name, Actions, Animal, AgeOfPet } from '../stylecomponents/petsstyles'

const Pets = ({ getAllPets, pets, deletePet, }) => {
  const [ adding, setAdding ] = useState(false);

    useEffect( () => {                  
        getAllPets()
    }, [])
    
    return (
        <>
            <h1> My Pets </h1>
            <NewPetButton onClick={() => setAdding(!adding)}>  +  Add  New  Pet</NewPetButton>
            { adding && <PetForm /> }
            <PetTable>
                <TopRow>
                    <Photo>Photo</Photo>
                    <Name>Name</Name>
                    <AgeOfPet>Age</AgeOfPet>
                    <Animal>Animal</Animal>
                    <Actions>Actions</Actions>
                </TopRow>             
                <PetList 
                    pets={pets} 
                    deletePet={deletePet}
                />
            </PetTable>
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
