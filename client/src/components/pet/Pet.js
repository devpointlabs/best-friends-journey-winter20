import { Component } from 'react';
import { Button, List, Modal, Image, Icon, Tab } from 'semantic-ui-react';
import PetForm from './PetForm';
import Documents from '../document/Documents';
import Insurances from '../insurance/Insurances';
import ConnectedNotes from '../note/Notes';
import React from 'react';
import { PetImage, PetName, PetImageTD, PetNameTD, PetActionTD, PetAction, PetAgeTD, PetAge, PetSpeciesTD, PetSpecies } from '../stylecomponents/petsstyles';

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
          <PetImageTD>
            <PetImage src={ pic }/>
          </PetImageTD>
          <PetNameTD>
            <PetName>{ nombre }</PetName>
          </PetNameTD>
          <PetAgeTD>
            <PetAge> { age } </PetAge>
          </PetAgeTD>
          <PetSpeciesTD>
            <PetSpecies> { animal } </PetSpecies>
          </PetSpeciesTD>
          <Modal
            onClose={() => this.setOpen(false)}
            onOpen={() => this.setOpen(true)}
            open={open}
            trigger={<PetActionTD> 
                      <Icon name="eye"/>
                    </PetActionTD>}
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
        </>
    )
  }
}

export default Pet;
