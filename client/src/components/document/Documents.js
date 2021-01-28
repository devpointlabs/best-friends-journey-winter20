import { Component } from 'react';
import { DocumentConsumer } from '../../providers/DocumentProvider';
import DocumentForm from './DocumentForm';
import DocumentList from './DocumentList';

class Documents extends Component {
  componentDidMount() {
    const { getAllPetDocument, petId} = this.props
    getAllPetDocument(petId)
  }

  render() {
    const { petId, addDocument, documents, deleteDocument, updateDocument } = this.props
    return(
      <>
        <DocumentForm 
          petId={petId}
          addDocument={addDocument}
        />
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
