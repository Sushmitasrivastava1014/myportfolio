
import './App.css';
import Hero from './Components/Hero/Hero.jsx';
import Navbar from './Components/Navbar/Navbar.jsx';
import About from './Components/About/About.jsx';
import Skills from './Components/Skills/Skills.jsx';
import Work from './Components/Work/Work.jsx';
import Contact from './Components/Contact/Contact.jsx';
import SocialSidebar from './Components/SocialSidebar/SocialSidebar.jsx';  // Import sidebar

function App() {
  return (
    <>
      <Navbar />
      <SocialSidebar /> 
      <main>
        <Hero />
        <About />
        <Skills />
        <Work />
        <Contact />
      </main>
    </>
  );
}

export default App;
