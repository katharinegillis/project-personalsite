import React from 'react';

import Portrait from '../components/Portrait/Portrait';
import Name from '../components/Name/Name';
import Descriptors from '../components/Descriptors/Descriptors';
import Blurb from '../components/Blurb/Blurb';
import Projects from '../components/Projects/Projects';
import Skills from '../components/Skills/Skills';
import Favourites from '../components/Favourites/Favourites';
import Education from '../components/Education/Education';
import Copyright from '../components/Copyright/Copyright';

import data from './Home.json';

const Home = () => (
  <div>
    <div className="L-header">
      <div className="L-header__portrait">
        <Portrait image={data.portrait} />
      </div>
      <div className="L-header__content">
        <Name name={data.name} />
        <Descriptors descriptors={data.descriptors} />
      </div>
    </div>
    <div className="L-content">
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
        <Projects projects={data.gaming.projects} fullWidth />
      </Blurb>
      <div className="L-content__row">
        <Education educationItems={data.education} />
        <Favourites title="Favourite Shows" items={data.favourite_shows} theme="tv" />
        <Favourites title="Favourite Music" items={data.favourite_music} theme="music" />
      </div>
    </div>
    <div className="L-footer">
      <Copyright author="Katie Cordes" startYear={2018} />
    </div>
  </div>
);

export default Home;
