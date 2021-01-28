import {Component} from 'react';
import { InsuranceConsumer } from '../../providers/InsuranceProvider';
import { Button, List, Modal, Image, Grid } from 'semantic-ui-react';
import { useEffect, useState } from 'react';
import InsuranceForm from './InsuranceForm';
import InsuranceList from './InsuranceList';

// import { Form } from 'semantic-ui-react';



const Insurances = ({ getAllPetInsurance, insurances, deleteInsurance, nombre, addInsurance, petId }) => {
    const [open,setOpen]=useState(false)
    // state = { 
    //     open: false, 
    //     editing: false
    //   }
    
    //   setOpen = (val) => this.setState({ open: val })
    //   setEditOpen = (val) => this.setState({ editing: val })
    useEffect( () => {                  
        getAllPetInsurance(petId)
    }, [])
    

    return (
        <Modal
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
        trigger={<Button>insurance</Button>}
      >
        <Modal.Header>{nombre}</Modal.Header>
        <Modal.Content image>
          {/* <Image size='medium' src={pic} wrapped /> */}
          <Modal.Description>
          <h1> Insurance </h1>
            <InsuranceForm addInsurance={addInsurance} petId={petId} /> 
  
            <InsuranceList  
              insurances={insurances} 
              petId={petId}
              deleteInsurance={deleteInsurance} 
            />
            <Grid columns={2} divided>
             
           
            </Grid>
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          {/* <Button icon='trash' color='red' onClick={() => deletePet(petId)} /> */}
          {/*<Modal
            onClose={() => this.setEditOpen(false)}
            onOpen={() => this.setEditOpen(true)}
            open={editing}
            trigger={<Button icon='pencil' color='yellow' />}
          >
            <Modal.Header>Edit {nombre}</Modal.Header>
            <Modal.Content>
              <PetForm {...this.props} setEditOpen={this.setEditOpen}/>
            </Modal.Content>
          </Modal> */}
        </Modal.Actions>
      </Modal>        

            
        
    )
}


const ConnectedInsurances = (props) => (
    <InsuranceConsumer>
        { value => (
            <Insurances {...props} {...value} />
        )}
    </InsuranceConsumer>
)

export default ConnectedInsurances;