import { Component } from 'react';
import { Button } from 'semantic-ui-react';
import InsuranceForm from './InsuranceForm';


class Insurance extends Component {
  state = { open: false }

  setOpen = (val) => this.setState({ open: val })

  render() {
    const { insuranceId, nombre, phone, policy, deleteInsurance, updateInsurance, petId} = this.props
    const { open } = this.state
    return (
        <>
            <p>{nombre}</p>
            <p>{phone}</p>
            <p>{policy}</p>
            <Button icon='trash' color='red' onClick={() => deleteInsurance(petId, insuranceId)} />
    
        </>
    )
  }
}

export default Insurance;