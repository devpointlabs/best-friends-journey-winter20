import Home from './components/shared/Home';
import NoMatch from './components/shared/NoMatch';
import Navbar from './components/shared/Navbar';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import { Switch, Route } from 'react-router-dom';
import { Container } from "semantic-ui-react";
import FetchUser from './components/auth/FetchUser';
import Pets from './components/pet/Pets';
import Insurances from './components/insurance/Insurances';
import Notes from './components/note/Notes';
import Profile from './components/profile/Profile';
import Developers from './components/shared/Developers';
import Footer from './components/shared/Footer';
import { PetBackground } from './components/stylecomponents/petsstyles';

const App = () => (
  <>
    <Navbar />
    <FetchUser>
      <Container>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <PetBackground>
            <Route exact path="/pets" component={Pets} />  
          </PetBackground>
          <Route exact path="/insurances" component={Insurances} />
          <Route exact path="/notes" component={Notes} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/developers" component={Developers} />
          <Route component={NoMatch} />
        </Switch>
      </Container>
    </FetchUser>
    <Footer/>
  </>
)

export default App;