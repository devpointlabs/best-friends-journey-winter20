import { Component } from 'react';
import { Form } from 'semantic-ui-react';
import { DocumentConsumer } from '../../providers/DocumentProvider';
import Dropzone from 'react-dropzone'; 

class DocumentForm extends Component {
  state = { title: '', description: '', file: '' }

  componentDidMount() {
    if (this.props.id) {
      const { title, description, picture } = this.props
      this.setState({ title, description, picture })
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }
  
  handleSubmit = (e) => {
    e.preventDefault();
    const { addDocument, petId } = this.props
    addDocument(petId, this.state)
    this.setState({ title: '', description: '', file: ''})
    if (this.props.id) {
      const { petId, updateDocument, id, setOpen } = this.prop
      updateDocument(petId, id, this.state)
      setOpen(false)
    } else {
      const { addDocument, petId } = this.props
      addDocument(petId, this.state)
    }
    this.setState({ title: '', description: '', file: '' })
  }

  onDrop = (files) => {
    this.setState({ ...this.state, file: files[0] })
  }

  render() {
    const { title, description, file } = this.state
    return(
      <Form onSubmit={this.handleSubmit}>
        <Form.Input
          name='title'
          value={title}
          onChange={this.handleChange}
          required
          label='Title'
        />
        <Form.TextArea
          name='description'
          value={description}
          onChange={this.handleChange}
          required
          label='Description'
        />
        <Dropzone
          onDrop={this.onDrop}
          multiple={false}
        >
          {({ getRootProps, getInputProps, isDragActive }) => {
            return (
              <div
                {...getRootProps()}
                style={styles.dropzone}
              >
                <input {...getInputProps()} />
                {
                  isDragActive ?
                    <p>Drop files here...</p> :
                    <p>Try dropping some files here, or click to select files to upload.</p>
                }
              </div>
            )
          }}
        </Dropzone>
        <Form.Button>
          Submit 
        </Form.Button>
      </Form>
    )
  }
}

  const styles = {
    dropzone: {
      height: "150px",
      width: "150px",
      border: "1px dashed black",
      borderRadius: "5px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "10px",
    },
  }

  const ConnectedDocumentForm = (props) => (
    <DocumentConsumer>
      { document => (
        <DocumentForm {...props} {...document} />
      )}
    </DocumentConsumer>
  )
  
  export default ConnectedDocumentForm;