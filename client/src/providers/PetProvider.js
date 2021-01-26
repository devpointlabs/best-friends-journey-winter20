import React, { Component } from 'react';
import axios from 'axios';
// import { Redirect } from 'react-router-dom';
const PetContext = React.createContext();

export const PetConsumer = PetContext.Consumer;


class PetProvider extends Component {
  state = { pets: [] }
  getAllPets = () => {
    axios.get('/api/pets')
      .then( res => {
        this.setState({ pets: res.data })
      })
      .catch( err => {
        console.log(err);
      })
  }
  
  addPet = (userId, pet, history) => {
    axios.post('/api/pets', { pet })
    .then(res => {
        const { pets } = this.state; 
        this.setState({ pets: [...pets, res.data]})
      })
      .catch( err => {
        console.log(err);
      })
  }

  updatePet = (id, pet) => {
    axios.put(`/api/pets/${id}`, { pet })
      .then( res => {
        const pets = this.state.pets.map( p => {
          if (p.id === id) {
            return res.data
          } 
          return p
        })
        this.setState({ pets })
      })
      .catch( err => {
        console.log(err);
      })
  }

  deletePet = (id) => {
    axios.delete(`/api/pets/${id}`)
      .then( res => {
        const { pets } = this.state
        this.setState({ pets: pets.filter( p => p.id !== id)})
        window.location.href = '/pets' 
      })
      .catch( err => {
        console.log(err);
      })
  }

  render() {
    return(
      <PetContext.Provider value={{
        ...this.state,
        addPet: this.addPet,
        updatePet: this.updatePet,
        deletePet: this.deletePet,
        getAllPets: this.getAllPets
      }}>
        { this.props.children }
      </PetContext.Provider>
    )
  }
}

export default PetProvider;