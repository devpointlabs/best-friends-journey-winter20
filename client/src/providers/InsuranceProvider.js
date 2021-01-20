import React, { Component } from 'react';
import axios from 'axios';
const InsuranceContext = React.createContext();
export const InsuranceConsumer = InsuranceContext.Consumer;
class InsuranceProvider extends Component {

  state = { insurances: [] }
  getAllPetInsurance = (petId) => {
    axios.get(`/api/pets/${petId}/insurances`)
      .then( res => {
        this.setState({ insurances: res.data })
      })
      .catch( err => {
        console.log(err);
      })
  }
  addInsurance = (petId, insurance) => {
    axios.post(`/api/pets/${petId}/insurances`, { insurance })
      .then(res => {
        const { insurances } = this.state 
        this.setState({ insurances: [...insurances, res.data] })
      })
      .catch( err => {
        console.log(err);
      })
  }
  deleteInsurance = (petId, id) => {
    axios.delete(`/api/pets/${petId}/insurances/${id}`)
      .then( res => {
        const { insurances } = this.state 
        this.setState({ insurances: insurances.filter( i => i.id !== id)})
      })
      .catch( err => {
        console.log(err);
      })
  }
  updateInsurance = (petId, id, insurance) => {
    axios.put(`/api/pets/${petId}/insurances/${id}`, { insurance })
      .then(res => {
        const insurances = this.state.insurances.map( i => {
          if (i.id === id) {
            return res.data
          }
          return i
        })
        this.setState({ insurances })
      })
      .catch( err => {
        console.log(err);
      })
  }
  render() {
    return(
      <InsuranceContext.Provider value={{
        ...this.state,
        getAllPetInsurance: this.getAllPetInsurance,
        addInsurance: this.addInsurance,
        deleteInsurance: this.deleteInsurance,
        updateInsurance: this.updateInsurance,
      }}>
        { this.props.children }
      </InsuranceContext.Provider>
    )
  }
}
export default InsuranceProvider;