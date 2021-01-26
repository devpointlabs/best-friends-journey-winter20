import { Component } from 'react';
// import NoteForm from './NoteForm';
import { Button } from 'semantic-ui-react';

class Note extends Component {
  state = { open: false }

  setOpen = (val) => this.setState({ open: val })

  render() {
    const { noteId, title, body  } = this.props
    const { open } = this.state
    return (
        <> 
            <p>{title}</p>
            <p>{body}</p>
            <Button icon='trash' color='red' onClick={() => deleteNote (noteId)} />
    {/* //   <NoteForm /> */}
        </>
    )
  }
}

export default Note;