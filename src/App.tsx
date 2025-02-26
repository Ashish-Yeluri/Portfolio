import Navigation from './components/Navigation';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Certifications from './components/Certifications';

function App() {
  return (
    <div className="min-h-screen bg-primary text-textPrimary">
      <Navigation />
      <main className="pt-16">
        <Header />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Certifications />
      </main>
    </div>
  );
}

export default App;