import React from 'react';
import { Component } from 'react';
import { Form } from 'semantic-ui-react';
import {InsuranceConsumer} from '../../providers/InsuranceProvider';


class InsuranceForm extends Component {
  state = { nombre: '', policy: '', phone: '' }

  componentDidMount() {
    if (this.props.id) {
      const { nombre, policy, phone } = this.props
      this.setState({ nombre, policy, phone })
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.props.id) {
      const { petId, updateInsurance, id, setOpen, deleteInsurance } = this.props
      updateInsurance(petId, id, this.state)
      setOpen(false)
    } else {
      const { addInsurance, petId } = this.props
      addInsurance(petId, this.state)
    }
    this.setState({ nombre: '', policy: '', phone: '' })
  }

  render() {
    const { nombre, policy, phone } = this.state 
    return(
      <Form onSubmit={this.handleSubmit}>
        <Form.Input
          name='nombre'
          value={nombre}
          onChange={this.handleChange}
          required
          label='Insurance Name'
        />
        <Form.Input
          name='policy'
          value={policy}
          onChange={this.handleChange}
          required
          label='Policy'
          type="number" 
          step="0.01"
        />
        <Form.Input
          name='phone'
          value={phone}
          onChange={this.handleChange}
          required
          label='Phone'
        />
        <Form.Button>
          Submit
        </Form.Button>
      </Form>
    )
  }
}

const ConnectedInsuranceForm = (props) => (
  <InsuranceConsumer>
    { Insurance => (
      <InsuranceForm {...props} {...Insurance} />
    )}
  </InsuranceConsumer>
)

export default ConnectedInsuranceForm;