import React from 'react';
import styled from 'styled-components';
import Logo from './images/Landing2.png';
import { Grid } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { MainButton } from '../stylecomponents/homestyles';

const SectionStuff = styled.section`
  background-color: #FEFFF2;
`

const ImageCenter = styled.img`
  display: block;
  margin-left: auto;
  margin-top: 6rem;
  margin-right: auto;
  width: 30%;

`

const Home = () => (
  <>
    <SectionStuff>
      <ImageCenter src={Logo} size='tiny' />
      <Grid>
        <Grid.Column textAlign="center">
          <Link to='/register'>
            <MainButton>Sign Up</MainButton>
          </Link>
        </Grid.Column>
      </Grid>
    </SectionStuff>
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
  </>
)

export default Home;