import React from 'react';
//mui
import { CssBaseline } from '@material-ui/core';
//layout
import PortfolioLayout from './layouts/Portfolio';
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
      {/* <main>
        <PortfolioLayout>
          <Banner />
        </PortfolioLayout>
        <PortfolioLayout>
          <SkillHolder />
        </PortfolioLayout>
        <PortfolioLayout>
          <WorkExpHolder />
        </PortfolioLayout>
        <PortfolioLayout>
          <ProjectHolder />
        </PortfolioLayout>
      </main> */}

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

export default App;
