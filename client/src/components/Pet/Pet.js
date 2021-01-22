import { Component } from 'react';
// import PetForm from './PetForm';
import { Button } from 'semantic-ui-react';

class Pet extends Component {
  state = { open: false }

  setOpen = (val) => this.setState({ open: val })

  render() {
    const { petId, nombre, age, animal, color, weight, sex, service, pic, vet, user_id, deletePet, } = this.props
    const { open } = this.state
    return (
        <> 
            <p>{nombre}</p>
            <p>{age}</p>
            <p>{animal}</p>
            <p>{color}</p>
            <p>{weight}</p>
            <p>{sex}</p>
            <p>{service}</p>
            <img src={pic} width="200px" />
            <p>{vet}</p>
            <br />
            <br></br>
            <Button icon='trash' color='red' onClick={() => deletePet(petId)} />
    {/* //   <PetForm /> */}
        </>
    )
  }
}

export default Pet;
