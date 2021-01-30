import { Component } from 'react';
import { Button, Card, List, Modal, Image, Grid } from 'semantic-ui-react';
import { useEffect, useState } from 'react';
import InsuranceForm from '../insurance/InsuranceForm';

class Insurance extends Component {
  state = { open: false }

  setOpen = (val) => this.setState({ open: val })

  render() {
    const { insuranceId, deleteInsurance, nombre, phone, policy, picture, updateInsurance, addInsurance, petId, description } = this.props
    const { open } = this.state
    return (
        <>
            <p>{nombre}</p>
            <p>{phone}</p>
            <p>{policy}</p>
            <Button icon='trash' color='red' onClick={() => deleteInsurance(petId, insuranceId)} />
    

            <Grid.Column>
              <Card>
               <Image src={picture} wrapped ui={false} size='medium' />
               <Card.Content>
                 <Card.Header>{Insurance}</Card.Header>
                 <Card.Description>
                   {nombre}
                   petId={petId}
                 </Card.Description>
               </Card.Content>
               <Card.Content extra>
                 <Button icon='trash' color='red' onClick={() => deleteInsurance(petId, insuranceId)} />
                <Modal
                  onClose={() => this.setOpen(false)}
                  onOpen={() => this.setOpen(true)}
                  open={open}
                  trigger={<Button icon='pencil' color='yellow'  /> }
                >
                  <Modal.Header>Edit Pet Insurance</Modal.Header>
                  <Modal.Content>
                    <Modal.Description>
                      <InsuranceForm 
                        setOpen={this.setOpen} 
                        {...this.props}
                        petId={petId}
                      />
                    </Modal.Description>
                  </Modal.Content>
                 </Modal>
              </Card.Content>
            </Card>
          </Grid.Column>
        </>
    )
  }
}
                





export default Insurance;