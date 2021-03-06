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

  addDocument = (petId, newDocument ) => {
    let document = new FormData();
    document.append('file', newDocument.file)
    document.append('pet_id', petId)
    document.append('title', newDocument.title)
    document.append('description', newDocument.description)
    axios.post(`/api/pets/${petId}/documents`, document)
    .then(res => {
        const { documents } = this.state; 
        this.setState({ documents: [...documents, res.data] })
        this.getAllPetDocument(petId)
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

  updateDocument = (petId, id, updatedDocument) => {
    let document = new FormData();
    document.append('file', updatedDocument.file)
    document.append('pet_id', petId)
    document.append('title', updatedDocument.title)
    document.append('description', updatedDocument.description)
    axios.put(`/api/pets/${petId}/documents/${id}`, document )
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