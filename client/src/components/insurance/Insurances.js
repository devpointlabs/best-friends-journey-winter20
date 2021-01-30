import { InsuranceConsumer } from '../../providers/InsuranceProvider';
import { Button, Modal,} from 'semantic-ui-react';
import { useEffect, useState } from 'react';
import InsuranceForm from './InsuranceForm';
import InsuranceList from './InsuranceList';

const Insurances = ({ getAllPetInsurance, insurances, deleteInsurance, nombre, addInsurance, petId }) => {
  const [open,setOpen]=useState(false)
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
        <Modal.Description>
          <h1> Insurance </h1>
          <InsuranceForm addInsurance={addInsurance} petId={petId} /> 
          <InsuranceList  
            insurances={insurances} 
            petId={petId}
            deleteInsurance={deleteInsurance} 
          />
        </Modal.Description>
      </Modal.Content>
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