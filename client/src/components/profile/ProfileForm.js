import { Component } from 'react';
import { Form } from 'semantic-ui-react';

class ProfileForm extends Component {
  state = {first_name: " ", last_name: " " }

  componentDidMount() {
    // if (this.props.id) {
      const { first_name, last_name} = this.props.user
      this.setState({ first_name, last_name})
     
    // }
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    //   const { profileId, updateProfile } = this.props
      this.props.updateProfile(this.props.user.id, { first_name: this.state.first_name, last_name: this.state.last_name})
    //   setOpen(false)
  }

  render() {
    const { first_name, last_name} = this.state 
    return(
      <Form onSubmit={this.handleSubmit}>
        <Form.Input
          name='first_name'
          value={first_name}
          onChange={this.handleChange}
          label='Name'
          placeholder="Name"
        />
        <Form.Input
          name='last_name'
          value={last_name}
          onChange={this.handleChange}
        //   type="Last Name"
          label='Last Name'
          placeholder="Last Name"
        />
        <Form.Button>
          Submit
        </Form.Button>
      </Form>
    )
  }
}

// const ConnectedProfileForm = (props) => (
//   <ProfileConsumer>
//     { profile => (
//       <ProfileForm {...props} {...profile} />
//     )}
//   </ProfileConsumer>
// )

export default ProfileForm;