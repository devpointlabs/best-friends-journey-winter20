import { Component } from 'react';
// import InsuranceForm from './InsuranceForm';
import { Button } from 'semantic-ui-react';

class Insurance extends Component {
  state = { open: false }

  setOpen = (val) => this.setState({ open: val })

  render() {
    const { insuranceId, nombre, phone, policy, deleteInsurance, } = this.props
    const { open } = this.state
    return (
        <> 
            <p>{nombre}</p>
            <p>{phone}</p>
            <p>{policy}</p>
            <Button icon='trash' color='red' onClick={() => deleteInsurance (insuranceId)} />
    {/* //   <InsuranceForm /> */}
        </>
    )
  }
}

export default Insurance;