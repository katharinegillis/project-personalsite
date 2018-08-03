import React from 'react';

import Header from '../components/Header/Header';
import Portrait from '../components/Portrait/Portrait';
import Name from '../components/Name/Name';
import Descriptors from '../components/Descriptors/Descriptors';
import Content from '../components/Content/Content';
import Blurb from '../components/Blurb/Blurb';
import Projects from '../components/Projects/Projects';
import Skills from '../components/Skills/Skills';
import Favourites from '../components/Favourites/Favourites';
import Education from '../components/Education/Education';
import Copyright from '../components/Copyright/Copyright';
import Footer from '../components/Footer/Footer';

import data from './Home.json';

const Home = () => (
  <div>
    <Header
      portrait={<Portrait image={data.portrait} />}
      name={<Name name={data.name} />}
      descriptors={<Descriptors descriptors={data.descriptors} />}
    />
    <Content>
      <Blurb title="About Me" text={data.aboutme} />
      <Blurb theme="coding" title={data.coding.title} text={data.coding.description}>
        <Projects projects={data.coding.projects} />
        <Skills title="Coding Skills" skills={data.coding.skills} />
      </Blurb>
      <Blurb theme="knitting" title={data.knitting.title} text={data.knitting.description}>
        <Projects projects={data.knitting.projects} />
        <Skills title="Knitting Skills" skills={data.knitting.skills} />
      </Blurb>
      <Blurb theme="gaming" title={data.gaming.title} text={data.gaming.description}>
        <Projects projects={data.gaming.projects} />
      </Blurb>
      <Education educationItems={data.education} />
      <Favourites title="Favourite Shows" items={data.favourite_shows} />
      <Favourites title="Favourite Music" items={data.favourite_music} />
    </Content>
    <Footer>
      <Copyright author="Katie Cordes" startYear={2018} />
    </Footer>
  </div>
);

export default Home;
