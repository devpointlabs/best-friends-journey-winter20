import { List } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import Insurance from './Insurance';

const InsuranceList = ({ insurances, deleteInsurance, petId, updateInsurance }) => (
  <>
    { insurances.map( i => 
     <Insurance
        insuranceId={i.id}
        {...i}
        petId={petId}
        deleteInsurance={deleteInsurance}
        updateInsurance = {updateInsurance}
        {...i}
        />
    )}
  </>
)

export default InsuranceList;