import { Component } from 'react';
import NoteForm from './NoteForm';
import { Button, Modal } from 'semantic-ui-react';

class Note extends Component {
  state = { open: false }

  setOpen = (val) => this.setState({ open: val })

  render() {
    const { noteId, title, body, deleteNote, petId } = this.props
    const { open } = this.state
    return (
      <> 
        <p>{title}</p>
        <p>{body}</p>
        <Button icon='trash' color='red' onClick={() => deleteNote(petId, noteId)} />
        
        <Modal
          onClose={() => this.setOpen(false)}
          onOpen={() => this.setOpen(true)}
          open={open}
          trigger={<Button icon='pencil' color='blue' /> }
        >
          <Modal.Header>Edit {title}</Modal.Header>
          <Modal.Content>
            <Modal.Description>
              <NoteForm {...this.props} setOpen={this.setOpen} />
            </Modal.Description>
          </Modal.Content>
        </Modal>
      </>
    )
  }
}

export default Note;