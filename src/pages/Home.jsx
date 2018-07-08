import React from 'react';

import Header from '../components/Header/Header';
import Portrait from '../components/Portrait/Portrait';
import Name from '../components/Name/Name';
import Descriptors from '../components/Descriptors/Descriptors';
import Content from '../components/Content/Content';
import Blurb from '../components/Blurb/Blurb';
import GridContainer from '../components/GridContainer/GridContainer';
import Projects from '../components/Projects/Projects';
import Skills from '../components/Skills/Skills';
import Favourites from '../components/Favourites/Favourites';
import Education from '../components/Education/Education';
import Copyright from '../components/Copyright/Copyright';
import Footer from '../components/Footer/Footer';

import data from './Home.json';

const Home = () => (
  <div className="page">
    <GridContainer columns={12}>
      <Header>
        <Portrait image={data.portrait} />
        <Name name={data.name} />
        <Descriptors descriptors={data.descriptors} />
      </Header>
    </GridContainer>
    <GridContainer columns={8} offset={2}>
      <Content>
        <Blurb title="About Me" text={data.aboutme} />
        <Blurb theme="coding" title={data.coding.title} text={data.coding.description}>
          <GridContainer columns={8}>
            <Projects projects={data.coding.projects} />
          </GridContainer>
          <GridContainer columns={4}>
            <Skills title="Coding Skills" skills={data.coding.skills} />
          </GridContainer>
        </Blurb>
        <Blurb theme="knitting" title={data.knitting.title} text={data.knitting.description}>
          <GridContainer columns={8}>
            <Projects projects={data.knitting.projects} />
          </GridContainer>
          <GridContainer columns={4}>
            <Skills title="Knitting Skills" skills={data.knitting.skills} />
          </GridContainer>
        </Blurb>
        <Blurb theme="gaming" title={data.gaming.title} text={data.gaming.description}>
          <GridContainer columns={12}>
            <Projects projects={data.gaming.projects} />
          </GridContainer>
        </Blurb>
        <GridContainer columns={4}>
          <Education educationItems={data.education} />
        </GridContainer>
        <GridContainer columns={4}>
          <Favourites title="Favourite Shows" items={data.favourite_shows} />
        </GridContainer>
        <GridContainer columns={4}>
          <Favourites title="Favourite Music" items={data.favourite_music} />
        </GridContainer>
      </Content>
    </GridContainer>
    <Footer>
      <Copyright author="Katie Cordes" startYear={2018} />
    </Footer>
  </div>
);

export default Home;
