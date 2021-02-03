import React from 'react';
//components
import Banner from './components/Banner';
import ProjectHolder from './components/ProjectHolder';
import WorkExpHolder from './components/WorkExpHolder';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className='App'>
      <header className='App-header'>app</header>
      <main>
        <Banner />
        <ProjectHolder />
        <WorkExpHolder />
        <Footer />
      </main>
      <footer></footer>
    </div>
  );
};

export default App;
