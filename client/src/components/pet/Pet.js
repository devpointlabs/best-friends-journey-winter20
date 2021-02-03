import { Component } from 'react';
import { Button, List, Modal, Image, Grid, Tab } from 'semantic-ui-react';
import PetForm from './PetForm';
import Documents from '../document/Documents';
import Insurances from '../insurance/Insurances';
import ConnectedNotes from '../note/Notes';
import React from 'react';

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
    const panes = [
      { menuItem: 'Documents', render: () => <Tab.Pane><Documents petId={petId}/></Tab.Pane> },
      { menuItem: 'Notes', render: () => <Tab.Pane><ConnectedNotes petId={petId}/></Tab.Pane> },
      { menuItem: 'Insurances', render: () => <Tab.Pane><Insurances nombre={nombre} petId={petId}/></Tab.Pane> },
    ]

    return (
        <>
          <List.Header>
            <Modal
              onClose={() => this.setOpen(false)}
              onOpen={() => this.setOpen(true)}
              open={open}
              trigger={<Button.Group fluid inverted size='huge' color='brown'> 
                        <Button>{nombre}</Button>
                      </Button.Group>}
            >
              <Modal.Header>{nombre}</Modal.Header>
              <Modal.Content image> 
                <Image size='medium' src={pic} wrapped />
                <Modal.Description>
                  <p><b>Age:</b> {age}</p>
                  <p><b>Animal:</b> {animal}</p>
                  <p><b>Color:</b> {color}</p>
                  <p><b>Weight:</b> {weight}</p>
                  <p><b>Sex:</b> {sex}</p>
                  <p><b>Service:</b> {service}</p>
                  <p><b>Vet:</b> {vet}</p>
                  <Tab panes={panes} />                
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
           

          </List.Header>
        </>
    )
  }
}

export default Pet;
