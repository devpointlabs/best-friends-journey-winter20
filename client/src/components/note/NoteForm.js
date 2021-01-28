import { Component } from 'react';
import { Form } from 'semantic-ui-react';
import { NoteConsumer } from '../../providers/NoteProvider';

class NoteForm extends Component {
  state = { title: '', body: '' }

  componentDidMount() {
    if (this.props.id) {
      const { title, body} = this.props
      this.setState({ title, body})
     
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.props.id) {
      const { petId, updateNote, id, setOpen } = this.props
      updateNote(petId, id, this.state)
      setOpen(false)
    } else {
      //const { addPet, userId } = this.props
      // hard coded userid
      const { addNote, petId } = this.props
  
      addNote(petId, this.state)
    }
    this.setState({ title: '', body: '' })
  }

  render() {
    const { title, body} = this.state 
    return(
      <Form onSubmit={this.handleSubmit}>
        <Form.Input
          name='title'
          value={title}
          onChange={this.handleChange}
          // required
          label='Title'
          placeholder="Title"
        />
        <Form.Input
          name='body'
          value={body}
          onChange={this.handleChange}
          // required
          type="text"
          label='Type here'
          placeholder="Type here"
        />
        <Form.Button>
          Submit
        </Form.Button>
      </Form>
    )
  }
}

const ConnectedNoteForm = (props) => (
  <NoteConsumer>
    { note => (
      <NoteForm {...props} {...note} />
    )}
  </NoteConsumer>
)

export default ConnectedNoteForm;