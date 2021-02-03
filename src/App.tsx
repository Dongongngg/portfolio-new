import React from 'react';
//mui
import { CssBaseline } from '@material-ui/core';
//components
import NavBar from './components/NavBar';
import Banner from './components/Banner';
import SkillHolder from './components/SkillHolder';
import WorkExpHolder from './components/WorkExpHolder';
import ProjectHolder from './components/ProjectHolder';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <>
      <CssBaseline />
      <header>
        <NavBar />
      </header>
      <main>
        <Banner />
        <SkillHolder />
        <WorkExpHolder />
        <ProjectHolder />
        <Footer />
      </main>
      <footer></footer>
    </>
  );
};

export default App;
