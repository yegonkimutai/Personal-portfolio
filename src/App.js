import About from './sections/about/About';
import Contact from './sections/contact/Contact';
import Footer from './sections/footer/Footer';
import Header from './sections/header/Header';
import Navbar from './sections/navbar/Navbar';
import Project from './sections/project/Project';

function App() {
  return (
    <main className="App">
        <Header/>
        <Navbar/>
        <About/>
        <Project/>
        <Contact/>
        <Footer/>
    </main>
  );
}

export default App;
