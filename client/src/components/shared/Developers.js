import React from 'react';
import { Button, Divider, Grid, Segment, Header, Image, Icon } from 'semantic-ui-react';
import styled from 'styled-components';
import SydneImage from './images/Sydne.jpg';
import ParkerImage from './images/Parker.jpeg';
import NikhilImage from './images/Nikhil.jpg'

const TopHeader = styled.header`
  text-align: center;
`
const H2Header = styled.header`
  text-align: center;
`
const SectionStuff = styled.section`
  background-color: #FEFFF2;
`

const Margin = styled.section`
  margin-bottom: 500px;
`

const Paragraphs = styled.p`
  margin-left: 1rem;
  margin-right: 1rem;
`

const Background = styled.b`
  background-color: #C9DAB8;
`

const Picture = styled.a`
  margin-left: 13rem;
`


const Developers = () => (
  <>
  <Segment>
    <SectionStuff>
    <Header inverted as='h1' block><TopHeader>The Development Team</TopHeader></Header>
    <br></br>
    <Grid columns={2} relaxed='very' stackable>
      <Grid.Column>  
        <Header as='h2'><H2Header>Mel Fabella</H2Header></Header>
        <br></br>
        <Image src='http://s3.amazonaws.com/37assets/svn/765-default-avatar.png' size='small' floated='left' />
        <Paragraphs>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Paragraphs>
        <Paragraphs>email</Paragraphs>
        <div>
          <Button fluid color='linkedin' target="_blank" href="https://www.linkedin.com/in/m-fabella/" ><Icon name='linkedin' />LinkedIn</Button>
          <br></br>
          <Button fluid target="_blank" href="https://github.com/MelFabella" secondary><Icon name='github' />GitHub</Button>
        </div>

        <br></br>
        <br></br>
        <hr></hr>
      
        <Header as='h2'><H2Header>Sydne Hanks</H2Header></Header>
        <br></br>
        <Image src={SydneImage} size='small' floated='left' />
        <Paragraphs>Going to DevPoint was one of the best decisions I’ve made for myself. The teachers were incredibly knowledgeable, and I learned a great deal in a short amount of time.  I have a portfolio of projects to demonstrate my newly-acquired expertise.  My most prized is the final project.</Paragraphs>
        <Paragraphs>The final project of the cohort I experimented with the client-driven web development model of Best Friends Journey.</Paragraphs>
        <Paragraphs>In this project I attempted to approximate the development process of a “real world” web application, this was large yet broken down into parts.  This project encouraged my development and implementation.</Paragraphs>
        <Paragraphs>I cannot be more proud of my classmates and I to have accomplished our final as a team. This is by far the most rewarding project of them all.</Paragraphs>
        <Paragraphs>sydnehanks@gmail.com</Paragraphs>
        <div>
          <Button fluid color='linkedin' target="_blank" href="https://www.linkedin.com/in/sydnehanks/"><Icon name='linkedin' />LinkedIn</Button>
          <br></br>
          <Button fluid target="_blank" href="https://github.com/sydnehanks" secondary><Icon name='github' />GitHub</Button>
        </div>
      </Grid.Column>
      <Grid.Column>
        <Header as='h2'><H2Header>Parker Jones</H2Header></Header>
        <br></br>
        <Image src={ParkerImage} size='small' floated='left' />
        <Paragraphs>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequa</Paragraphs>
        <Paragraphs>email</Paragraphs>
        <div>
          <Button fluid color='linkedin' target="_blank" href="https://www.linkedin.com/in/parkerhjones/"><Icon name='linkedin' />LinkedIn</Button>
          <br></br>
          <Button fluid target="_blank" href="https://github.com/ParkerHJones" secondary><Icon name='github' />GitHub</Button>
        </div>
        <br></br>
        <br></br>
        <hr></hr>

        <Header as='h2'><H2Header>Nikhil Math</H2Header></Header>
        <br></br>
        <Image src={NikhilImage} size='small' floated='left' />
        <Paragraphs>One of my favorite parts of working with Best Friends Journey was the design aspect of the project. I have always liked doing design work, but I never enjoyed drawing with paper and pencil. This project, and the many other projects I have done at DevPoint Labs, has taught me that making websites aesthetically pleasing is something I hope I can do more of as a career soon. </Paragraphs>
        <Paragraphs>I have learned a great deal about web development in the past couple of months, more than I thought I could ever learn in a couple of months. I enjoy making websites, and I hope I can do this more often. The biggest thing I have learned from this course is teaching me how to plan and execute a project with a group of people and how scrums work. Group projects are challenging when communication isn’t the best, but thankfully my team was nothing short of having excellent communication skills. I could not have come close to being this successful on this project without the help of my fellow teammates; I give thanks to them a lot.</Paragraphs>
        <Paragraphs>erulemath@gmail.com</Paragraphs>
        <div>
          <Button fluid color='linkedin' target="_blank" href="https://www.linkedin.com/in/nikhil-math/"  ><Icon name='linkedin' />LinkedIn</Button>
          <br></br>
          <Button fluid target="_blank" href="https://github.com/NikhilMath" secondary><Icon name='github' />GitHub</Button>
        </div>
      </Grid.Column>
    </Grid>
  </SectionStuff>
  </Segment>
  
 <br />
 <br />
 <br />
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


export default Developers;