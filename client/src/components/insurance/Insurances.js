import { InsuranceConsumer } from '../../providers/InsuranceProvider';
import { useEffect, useState } from 'react';
import InsuranceForm from './InsuranceForm';
import InsuranceList from './InsuranceList';
import { MainButton } from '../stylecomponents/homestyles';

const Insurances = ({ getAllPetInsurance, insurances, deleteInsurance, addInsurance, petId }) => {
  const [ adding, setAdding ] = useState(false);

  useEffect( () => {                  
    getAllPetInsurance(petId)
  }, [])

  return (
    <>
      {/* <h1> Insurance </h1> */}
      <MainButton onClick={() => setAdding(!adding)}>Add Insurance</MainButton>
      <br />
      <br />
      { adding && <InsuranceForm petId={petId} /> }
      <InsuranceList  
        insurances={insurances} 
        deleteInsurance={deleteInsurance} 
        petId={petId}
      />
    </>     
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