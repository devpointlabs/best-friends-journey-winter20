import { Component } from 'react';
import { AuthConsumer } from "../../providers/AuthProvider";
import { Menu } from 'semantic-ui-react';
import { Link, withRouter } from 'react-router-dom';

class Navbar extends Component {
  
  rightNavItems = () => {
    const { user, handleLogout, location, } = this.props;
    
    if (user) {
      return (
        <Menu.Menu position='right'>
          <Link to='/pets'>
            <Menu.Item
              id='pets'
              name='pets'
              active={location.pathname === '/pets'}
            />
          </Link>

          <Link to='/insurance'>
            <Menu.Item
              id='insurance'
              name='insurance'
              active={location.pathname === '/insurances'}
            />
          </Link>

          <Link to='/documents'>
            <Menu.Item
              id='documents'
              name='documents'
              active={location.pathname === '/documents'}
            />
          </Link>

          <Link to='/notes'>
            <Menu.Item
              id='notes'
              name='notes'
              active={location.pathname === '/notes'}
            />
          </Link>

          <Menu.Item
            name='logout'
            onClick={ () => handleLogout(this.props.history) }
          />
        </Menu.Menu>
      )
    } else {
      return (
        <Menu.Menu position='right'>
          <Link to='/login'>
            <Menu.Item
              id='login'
              name='login'
              active={location.pathname === '/login'}
            />
          </Link>
          <Link to='/register'>
            <Menu.Item
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
        <Menu pointing secondary>
          <Link to='/'>
            <Menu.Item
              name='home'
              id='home'
              active={this.props.location.pathname === '/'}
            />
          </Link>
            { this.rightNavItems() }
        </Menu>
      </div>
    )
  }
}

const ConnectedNavbar = (props) => (
  <AuthConsumer> 
    { auth => 
      <Navbar { ...props } {...auth} />
    }
  </AuthConsumer>
)
 

export default withRouter(ConnectedNavbar);
