import Contact from './sections/contact/Contact';
import Footer from './sections/footer/Footer';
import Header from './sections/header/Header';
import Navbar from './sections/navbar/Navbar';
import Project from './sections/project/Project';
import Skill from './sections/skills/Skill';

function App() {
  return (
    <main className="App">
      <Header />
      <Navbar />
      <Skill />
      <Project />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
