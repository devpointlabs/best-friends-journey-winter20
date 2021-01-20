import React, { Component } from 'react';
import axios from 'axios';
const NoteContext = React.createContext();
export const NoteConsumer = NoteContext.Consumer;

class NoteProvider extends Component {

  state = { notes: [] }
  getAllPetNote = (petId) => {
    axios.get(`/api/pets/${petId}/notes`)
      .then( res => {
        this.setState({ notes: res.data })
      })
      .catch( err => {
        console.log(err);
      })
  }
  addNote = (petId, note) => {
    axios.post(`/api/pets/${petId}/notes`, { note })
      .then(res => {
        const { notes } = this.state 
        this.setState({ notes: [...notes, res.data] })
      })
      .catch( err => {
        console.log(err);
      })
  }
  deleteNote = (petId, id) => {
    axios.delete(`/api/pets/${petId}/notes/${id}`)
      .then( res => {
        const { notes } = this.state 
        this.setState({ notes: notes.filter( n => n.id !== id)})
      })
      .catch( err => {
        console.log(err);
      })
  }
  updateNote = (petId, id, note) => {
    axios.put(`/api/pets/${petId}/notes/${id}`, { note })
      .then(res => {
        const notes = this.state.notes.map( n => {
          if (n.id === id) {
            return res.data
          }
          return n
        })
        this.setState({ notes })
      })
      .catch( err => {
        console.log(err);
      })
  }
  render() {
    return(
      <NoteContext.Provider value={{
        ...this.state,
        getAllPetNote: this.getAllPetNote,
        addNote: this.addNote,
        deleteNote: this.deleteNote,
        updateNote: this.updateNote,
      }}>
        { this.props.children }
      </NoteContext.Provider>
    )
  }
}
export default NoteProvider;