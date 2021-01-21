import PetForm from './PetForm';
import PetList from './PetList';
import { PetConsumer } from '../../providers/PetProvider';

const Pets = () => (
  <PetConsumer>
    { value => (
      <>
        <h1>Pets </h1>
        <PetsForm addMenu={value.addPet} />
        <PetsList pets={value.pets} />
      </>
    )}
  </PetConsumer>
)

export default Pets;