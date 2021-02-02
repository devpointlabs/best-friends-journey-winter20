import { Component } from 'react';
import { DocumentConsumer } from '../../providers/DocumentProvider';
import DocumentForm from './DocumentForm';
import DocumentList from './DocumentList';

class Documents extends Component {
  state = { showForm: false }

  componentDidMount() {
    const { getAllPetDocument, petId} = this.props
    getAllPetDocument(petId)
  }

  openForm = (val) => this.setState({showForm: val})

  render() {
    const { petId, addDocument, documents, deleteDocument, updateDocument } = this.props
    const { showForm } = this.state 
    return( 
      <>
        <h1> Documents </h1>
        {
          showForm ?
          <DocumentForm 
            petId={petId}
            addDocument={addDocument}
            openForm={this.openForm}
          />
          :
          <button onClick={() => this.openForm(true)}>Add Document</button>
        }
        <DocumentList 
          petId={petId}
          documents={documents}
          deleteDocument={deleteDocument}
          updateDocument={updateDocument}
        />
      </>
    ) 
  }
}

const ConnectedDocuments = (props) => (
  <DocumentConsumer>
      { value => (
        <Documents {...props} {...value} />
      )}
  </DocumentConsumer>
)

export default ConnectedDocuments;
