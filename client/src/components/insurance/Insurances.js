// import InsuranceForm from './InsuranceForm';
import InsuranceList from './InsuranceList';
import { InsuranceConsumer } from '../../providers/InsuranceProvider';
import { useEffect } from 'react';

const Insurances = ({ getAllInsurances, insurances, deleteInsurance }) => {
    useEffect( () => {                  
        getAllInsurances()
    }, [])
    
    return (
        <>
            <h1> Insurances </h1>
            {/* <InsurancesForm addInsurance={value.addInsurance} /> */}
            <InsuranceList 
                insurances={insurances} 
                deleteInsurance={deleteInsurance}
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