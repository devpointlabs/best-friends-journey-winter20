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

const App = () => (
  <>
    <Navbar />
    <FetchUser>
      <Container>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/pets" component={Pets} />
          <Route exact path="/insurances" component={Insurances} />
          <Route exact path="/notes" component={Notes} />
          <Route exact path="/profile" component={Profile} />
          <Route component={NoMatch} />
        </Switch>
      </Container>
    </FetchUser>
  </>
)

export default App;
