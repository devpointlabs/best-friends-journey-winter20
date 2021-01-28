import React, { Component } from 'react';
import axios from 'axios';

const DocumentContext = React.createContext();

export const DocumentConsumer = DocumentContext.Consumer;

class DocumentProvider extends Component {
  state = { documents: [] }

  getAllPetDocument = (petId) => {
    axios.get(`/api/pets/${petId}/documents`)
      .then( res => {
        this.setState({ documents: res.data })
      })
      .catch( err => {
        console.log(err);
      })
  }

  addDocument = (userId, newDocument, history) => {
    let pet = new FormData();
    pet.append('file', newDocument.file)
    pet.append('user_id', userId)
    pet.append('title', newDocument.title)
    pet.append('description', newDocument.description)
    axios.post('/api/pets', pet )
    .then(res => {
        const { pets } = this.state; 
        this.setState({ pets: [...pets, res.data] })
      })
      .catch( err => {
        console.log(err);
      })
  }

  deleteDocument = (petId, id) => {
    axios.delete(`/api/pets/${petId}/documents/${id}`)
      .then( res => {
        const { documents } = this.state 
        this.setState({ documents: documents.filter( d => d.id !== id)})
      })
      .catch( err => {
        console.log(err);
      })
  }

  updateDocument = (petId, id, document) => {
    axios.put(`/api/pets/${petId}/documents/${id}`, { document })
      .then(res => {
        const documents = this.state.documents.map( d => {
          if (d.id === id) {
            return res.data
          }
          return d
        })
        this.setState({ documents })
      })
      .catch( err => {
        console.log(err);
      })
  }

  render() {
    return(
      <DocumentContext.Provider value={{
        ...this.state,
        getAllPetDocument: this.getAllPetDocument,
        addDocument: this.addDocument,
        deleteDocument: this.deleteDocument,
        updateDocument: this.updateDocument,
      }}>
        { this.props.children }
      </DocumentContext.Provider>
    )
  }
}

export default DocumentProvider;