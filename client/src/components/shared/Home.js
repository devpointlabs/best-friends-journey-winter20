import React from 'react';
import styled from 'styled-components';
import Logo from './images/Landing2.png';
import { Grid } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { SignUp } from '../stylecomponents/homestyles';

const SectionStuff = styled.section`
  background-color: #FEFFF2;
`

const ImageCenter = styled.img`
  display: block;
  margin-left: auto;
  margin-top: 6rem;
  margin-right: auto;
  width: 50%;

`

const Home = () => (
  <>
    <SectionStuff>
      <ImageCenter src={Logo} size='small' />
      <Grid>
        <Grid.Column textAlign="center">
          <Link to='/register'>
            <SignUp>Sign Up</SignUp>
          </Link>
        </Grid.Column>
      </Grid>
    </SectionStuff>
  </>
)

export default Home;