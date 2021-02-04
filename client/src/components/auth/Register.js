import { Component } from 'react';
import { AuthConsumer } from "../../providers/AuthProvider";
import { Button, Form, Segment, Header } from 'semantic-ui-react';
import * as S from './authStyles';

class Register extends Component {
  state = { email: '', password: '', passwordConfirmation: '', };
  
  handleSubmit = (e) => {
    e.preventDefault();
    const { email, password, passwordConfirmation, } = this.state;
    const { handleRegister, history, } = this.props;

    if (password === passwordConfirmation)
      handleRegister({ email, password, passwordConfirmation, }, history);
    else
      alert('Passwords Do Not Match!')
  }
  
  handleChange = (e) => {
    const { name, value, } = e.target;
    this.setState({ [name]: value, });
  }
  
  render() {
    const { email, password, passwordConfirmation, } = this.state;
    
    return (
      <S.Wrapper>
        <br></br>
        <Header as='h2' textAlign='center' color='grey'>Welcome to Best Friend's Journey</Header>
        <br></br>
        <br></br>
        <S.Form onSubmit={this.handleSubmit}>
          <S.FormInput
            // label="Email"
            required
            autoFocus
            name='email'
            value={email}
            placeholder='Email'
            onChange={this.handleChange}
          />
          <S.FormInput
            // label="Password"
            required
            name='password'
            value={password}
            placeholder='Password'
            type='password'
            onChange={this.handleChange}
          />
          <S.FormInput
            // label="Password Confirmation"
            required
            name='passwordConfirmation'
            value={passwordConfirmation}
            placeholder='Confirm Password'
            type='password'
            onChange={this.handleChange}
          />
          <Segment textAlign='center' basic>
          <S.Button>Sign Up</S.Button>
          </Segment>
        </S.Form>
      </S.Wrapper>
    )
  }
}

// const StyleFormInput = styled(Form.Input)`
//   padding: 1rem!important;
//   margin-top: 0rem !important;
//   margin-bottom: 0rem !important;
//   margin-right: 12rem !important;
//   margin-left: 16rem !important;
//   background: white;
//   border-radius: 0px !important;
//   border: none;
//   color: white;
//   cursor: pointer;
//   box-sizing: border-box;
//   width: 50%;
//   `
//   const StyledButton = styled.button`
//   background-color: #C9DAB8;
//   min-width: 400px;
//   padding: 24px 12px;
//   font-size: 15px;
//   color: white; 
//   margin-top: 1rem;
//   border: none;
//   border-radius: 25px;
//   box-sizing: content-box;
//   height: 100%;
//   `;

const ConnectedRegister = (props) => (
  <AuthConsumer>
    { auth => <Register { ...props } {...auth} /> }
  </AuthConsumer>
)


export default ConnectedRegister;