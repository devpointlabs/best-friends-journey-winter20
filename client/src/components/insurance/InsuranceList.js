import { List } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import Insurance from './Insurance';

const InsuranceList = ({ insurances, deleteInsurance }) => (
  <>
    { insurances.map( i => 
     <Insurance
        insuranceId={i.id}
        {...i}
        deleteInsurance={deleteInsurance}
        />
    )}
  </>
)

export default InsuranceList;