import React from 'react'
import { Component } from 'react';
import { Form } from 'semantic-ui-react';


class ItemForm extends Component {
  state = { insurance_nombre: '', plan: '', phone: '' }

  componentDidMount() {
    if (this.props.id) {
      const { insurance_nombre, plan, phone } = this.props
      this.setState({ insurance_nombre, plan, phone })
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { plan } = this.state
    this.setState({ plan: '' (plan)})
    if (this.props.id) {
      const { petId, updateInsurance, id, setOpen } = this.props
      updateInsurance(petId, id, this.state)
      setOpen(false)
    } else {
      const { addInsurance, petId } = this.props
      addInsurance(petId, this.state)
    }
    this.setState({ insurance_nombre: '', plan: '', phone: '' })
  }

  render() {
    const { insurance_nombre, plan, phone } = this.state 
    return(
      <Form onSubmit={this.handleSubmit}>
        <Form.Input
          name='insurance_nombre'
          value={insurance_nombre}
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

export default InsuranceForm;