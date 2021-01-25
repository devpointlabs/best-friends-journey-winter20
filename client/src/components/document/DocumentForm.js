import { Component } from 'react';
import { Form } from 'semantic-ui-react';

class DocumentForm extends Component {
  state = { title: '', description: '', picture: '' }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }
  
  handleSubmit = (e) => {
    e.preventDefault();
    const { addDocument, petId } = this.props
    addDocument(petId, this.state)
    this.setState({ title: '', description: '', picture: ''})
  }
  
  render() {
    const { title, description, picture } = this.state
    return(
      <Form onSubmit={this.handleSubmit}>
        <Form.Input
          name='title'
          value={title}
          onChange={this.handleChange}
          required
          label='Title'
        />
        <Form.Input
          name='description'
          value={description}
          onChange={this.handleChange}
          required
          label='Description'
        />
        <Form.Input
          name='picture'
          value={picture}
          onChange={this.handleChange}
          required
          label='Picture'
        />
        <Form.Button>
          Submit 
        </Form.Button>
      </Form>
    )
  }
}export default DocumentForm