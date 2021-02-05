import React from 'react';
import { Button, Divider, Grid, Segment, Header, Image, Icon } from 'semantic-ui-react';
import styled from 'styled-components';
import SydneImage from './images/Sydne.jpg';
import ParkerImage from './images/Parker.jpeg';
import NikhilImage from './images/Nikhil.jpg'
import MelImage from './images/Mel.png'

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
        <Image src={MelImage} size='small' floated='left' />
            <Paragraphs>My favorite part of developing the Best Friends App was the team aspect. I found out that one of my favorite things when it comes to web development is working with a group of people and problem-solving solutions together. </Paragraphs>
            <Paragraphs>My time at DevPoint Labs has helped me reach my potential. This course has given me a good foundation on how to excel in a career. I am very excited for the future, and I am incredibly thankful for everything that DevPoint has given me.</Paragraphs>
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
        <Paragraphs>In this project I attempted to approximate the development process of a “real world” web application.  This was large yet broken down into parts.  This project encouraged my development and implementation.</Paragraphs>
        <Paragraphs>I cannot be more proud of my classmates and I to have accomplished our finals as a team. This is by far the most rewarding project of them all.</Paragraphs>
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
            <Paragraphs>DevPoint Labs has opened up a new world of possibility for myself. Being able to create a useful, fun, and innovative application like Best Friend’s Journey is a final product from this cohort that shows the programming skills that I have gained in three months. It was a pleasure making this project with my team to show our ability to work as a group. I am excited to create even more in the future.</Paragraphs>
            <br></br>
            
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