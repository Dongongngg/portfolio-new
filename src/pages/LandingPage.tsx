import React from 'react';
//mui
import { CssBaseline } from '@material-ui/core';
//components
import NavBar from '../components/NavBar';
import Banner from '../components/Banner';
import SkillHolder from '../components/SkillHolder';
import WorkExpHolder from '../components/WorkExpHolder';
import ProjectHolder from '../components/ProjectHolder';
import Footer from '../components/Footer';
//layout
import PortfolioLayout from '../layouts/Portfolio';

const LandingPage: React.FC = () => {
  return (
    <>
      <CssBaseline />
      <NavBar />
      <PortfolioLayout
        banner={<Banner />}
        skill={<SkillHolder />}
        work={<WorkExpHolder />}
        project={<ProjectHolder />}
      />
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default LandingPage;
