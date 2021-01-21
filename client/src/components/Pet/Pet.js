import { Component } from 'react';
// import PetForm from './PetForm';

class Pet extends Component {
  state = { open: false }

  setOpen = (val) => this.setState({ open: val })

  render() {
    const { petId, nombre, age, animal, color, weight, sex, service, pic, vet, user_id } = this.props
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
    {/* //   <PetForm /> */}
        </>
    )
  }
}

export default Pet;
