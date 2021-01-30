import Insurance from './Insurance';
import { Grid } from 'semantic-ui-react';

const InsuranceList = ({ insurances, deleteInsurance, petId, updateInsurance }) => (
  <Grid columns={2}>
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
  </Grid>
)

export default InsuranceList;