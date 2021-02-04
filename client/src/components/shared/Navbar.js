import { Component } from 'react';
import { AuthConsumer } from "../../providers/AuthProvider";
import { Menu, MenuItem} from 'semantic-ui-react';
import { Link, withRouter } from 'react-router-dom';
import { NavMenu, NavagationLink } from '../stylecomponents/NavStyles';
import logo from '../../components/shared/images/paw.png';
// Quicksand-VariableFont_wght.ttf
class Navbar extends Component {
  
  rightNavItems = () => {
    const { user, handleLogout, location, } = this.props;
    
    if (user) {
      return (
        <Menu.Menu position='right'>
          <Link to='/pets'>
            <NavagationLink
              id='pets'
              name='My Pets'
              active={location.pathname === '/pets'}
            />
          </Link>
          <Link to='/profile'>
            <NavagationLink
              id='profile'
              name='User Profile'
              active={location.pathname === '/profile'}
            />
          </Link>
          <NavagationLink
            name='logout'
            onClick={ () => handleLogout(this.props.history) }
          />
        </Menu.Menu>
      )
    } else {
      return (
        <Menu.Menu position='right'>
          <Link to='/login'>
            <NavagationLink
              id='login'
              name='login'
              active={location.pathname === '/login'}
            />
          </Link>
          <Link to='/register'>
            <NavagationLink
              id='register'
              name='register'
              active={location.pathname === '/register'}
            />
          </Link>
        </Menu.Menu>
      )
    }
  }
  

  render() {
    return (
      <div>
        <NavMenu pointing secondary>
          <Link to='/'>
            <img src={logo} width="80"
              name='home'
              id='home'
              active={this.props.location.pathname === '/'}
            />
          </Link>
          <Link to='/developers'>
            <NavagationLink
              id='developers'
              name='developers'
              active={location.pathname === '/developers'}
            />
          </Link>
            { this.rightNavItems() }
        </NavMenu>
      </div>
    )
  }
}












//   render() {
//     return (
//       <div>
//         <Menu pointing secondary>
//           <Link to='/'>
//             <Menu.Item
//               name='home'
//               id='home'
//               active={this.props.location.pathname === '/'}
//             />
//           </Link>
//           <Link to='/developers'>
//             <Menu.Item
//               id='developers'
//               name='developers'
//               active={location.pathname === '/developers'}
//             />
//           </Link>
//             { this.rightNavItems() }
//         </Menu>
//       </div>
//     )
//   }
// }


const ConnectedNavbar = (props) => (
  <AuthConsumer> 
    { auth => 
      <Navbar { ...props } {...auth} />
    }
  </AuthConsumer>
)
 

export default withRouter(ConnectedNavbar);
