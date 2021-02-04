import { Component } from 'react';
import { AuthConsumer } from "../../providers/AuthProvider";
import { Button, Form, Segment, Header } from 'semantic-ui-react';
import * as S from './authStyles';

class Login extends Component {
  state = { email: '', password: '' }
  
  handleSubmit = (e) => {
    e.preventDefault();
    const { email, password, } = this.state;
    this.props.handleLogin({ email, password, }, this.props.history);
  }
  
  handleChange = (e) => {
    const { name, value, } = e.target;
    this.setState({ [name]: value, });
  }

  render() {
    const { email, password, } = this.state;
  
    return (
      // <Segment basic>
      <S.Wrapper>
        <br></br>
        <Header as='h1' textAlign='center' color='grey'>Login</Header>
        <br></br>
        <S.Form onSubmit={this.handleSubmit}>
          <S.FormInput
            // label="Email"
            autoFocus
            required         
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
          {/* <Segment textAlign='center' basic> */}
          <S.Button>LOG IN</S.Button>
        </S.Form>
        {/* </Segment> */}
        </S.Wrapper>
    )
  }
}

// const StyledForm = styled.form`
// display: flex;
// margin: 2rem 0 0;
// flex-direction: column;
// justify-content: center;
// align-items: center;
// `

// const StyleFormInput = styled.input`
//   padding: 2rem !important;
//   margin: 1rem 5rem 2rem;
//   background: white;
//   border-radius: 5px;
//   border: 1px solid #E6E6E6;
//   color: white;
//   cursor: pointer;
//   box-sizing: border-box;
//   width: 425px;
//   outline: none;
//   `;


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

//   const Wrapper = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   `

const ConnectedLogin = (props) => (
  <AuthConsumer>
    { auth => <Login {...props} {...auth} />}
  </AuthConsumer>
)

export default ConnectedLogin;