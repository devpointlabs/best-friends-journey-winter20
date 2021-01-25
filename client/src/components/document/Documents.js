import { Component } from 'react';
import { DocumentConsumer } from '../../providers/DocumentProvider';
import DocumentForm from './DocumentForm'

class Documents extends Component {
  componentDidMount() {
    const { getAllPetDocument, petId } = this.props
    getAllPetDocument(petId)
  }

  render() {
    const { petId, addDocument} = this.props
    return(
      <>
        <DocumentForm 
          petId={petId}
          addDocument={addDocument}
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
