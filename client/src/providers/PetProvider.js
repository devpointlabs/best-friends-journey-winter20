import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
const petContext = React.createContext();
export const petConsumer = petContext.Consumer;


class petProvider extends Component {
  state = { pets: [] }
  componentDidMount() {
    axios.get('/api/pets')
      .then( res => {
        this.setState({ pets: res.data })
      })
      .catch( err => {
        console.log(err);
      })
  }
  addPet = (pet) => {
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
        window.location.href = '/user'
      })
      .catch( err => {
        console.log(err);
      })
  }
  render() {
    return(
      <petContext.Provider value={{
        ...this.state,
        addpet: this.addpet,
        updatepet: this.updatepet,
        deletepet: this.deletepet,
      }}>
        { this.props.children }
      </petContext.Provider>
    )
  }
}
export default petProvider;