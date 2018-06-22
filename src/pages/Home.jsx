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

const Home = () => (
  <div className="page">
    <GridContainer columns={12}>
      <Header>
        <Portrait image="/images/portrait.jpg" />
        <Name name="firstname lastname" />
        <Descriptors descriptors={['descriptor1', 'descriptor2']} />
      </Header>
    </GridContainer>
    <GridContainer columns={8} offset={2}>
      <Content>
        <Blurb title="About Me" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec neque in neque aliquam dignissim. Curabitur est elit, venenatis eget purus non, consequat venenatis dui. Nunc semper ante mi, eu tincidunt tellus dictum sit amet. Pellentesque blandit diam sit amet diam porta hendrerit. Morbi egestas enim augue, eu aliquam ligula pharetra sed. Nam placerat mattis lacus, eu pellentesque purus pulvinar a. Curabitur at luctus lacus. Mauris quis molestie turpis. Fusce quis urna in mi cursus imperdiet." />
        <Blurb theme="coding" title="Coding" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec neque in neque aliquam dignissim. Curabitur est elit, venenatis eget purus non, consequat venenatis dui. Nunc semper ante mi, eu tincidunt tellus dictum sit amet. Pellentesque blandit diam sit amet diam porta hendrerit. Morbi egestas enim augue, eu aliquam ligula pharetra sed. Nam placerat mattis lacus, eu pellentesque purus pulvinar a. Curabitur at luctus lacus. Mauris quis molestie turpis. Fusce quis urna in mi cursus imperdiet.">
          <GridContainer columns={8}>
            <Projects />
          </GridContainer>
          <GridContainer columns={4}>
            <Skills title="Coding Skills" />
          </GridContainer>
        </Blurb>
        <GridContainer columns={4}>
          <Education />
        </GridContainer>
        <GridContainer columns={4}>
          <Favourites title="Favourite Shows" />
        </GridContainer>
        <GridContainer columns={4}>
          <Favourites title="Favourite Music" />
        </GridContainer>
      </Content>
    </GridContainer>
    <Footer>
      <Copyright author="Katie Cordes" startYear={2018} />
    </Footer>
  </div>
);

export default Home;
