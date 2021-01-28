import { Component } from 'react';
import { Button, List, Modal, Image, Grid } from 'semantic-ui-react';
import PetForm from './PetForm';
import Documents from '../document/Documents';
import Insurances from '../insurance/Insurances';
import ConnectedNotes from '../note/Notes';

class Pet extends Component {
  state = { 
    open: false, 
    editing: false
  }

  setOpen = (val) => this.setState({ open: val })
  setEditOpen = (val) => this.setState({ editing: val })

  render() {
    const { petId, nombre, age, animal, color, weight, sex, service, pic, vet, user_id, deletePet, updatePet, Notes } = this.props
    const { open, editing, } = this.state
    return (
        <>
          <List.Header>
            <Modal
              onClose={() => this.setOpen(false)}
              onOpen={() => this.setOpen(true)}
              open={open}
              trigger={<Button>{nombre}</Button>}
            >
              <Modal.Header>{nombre}</Modal.Header>
              <Modal.Content image>
                <Image size='medium' src={pic} wrapped />
                <Modal.Description>
                  <p>{age}</p>
                  <p>{animal}</p>
                  <p>{color}</p>
                  <p>{weight}</p>
                  <p>{sex}</p>
                  <p>{service}</p>
                  <p>{vet}</p>
                  <Grid columns={2} divided>
                    <Documents petId={petId}/> 
                    <ConnectedNotes petId={petId}/>
                  </Grid>
                </Modal.Description>
              </Modal.Content>
              <Modal.Actions>
                <Button icon='trash' color='red' onClick={() => deletePet(petId)} />
                <Modal
                  onClose={() => this.setEditOpen(false)}
                  onOpen={() => this.setEditOpen(true)}
                  open={editing}
                  trigger={<Button icon='pencil' color='yellow'/>}
                >
                  <Modal.Header>Edit {nombre}</Modal.Header>
                  <Modal.Content>
                    <PetForm {...this.props} setEditOpen={this.setEditOpen}/>
                  </Modal.Content>
                </Modal>
              </Modal.Actions>
            </Modal>
           <Insurances
            nombre={nombre}
           />

          </List.Header>
        </>
    )
  }
}

export default Pet;
