import About from './sections/about/About';
import Contact from './sections/contact/Contact';
import FloatingNav from './sections/floating/FloatingNav';
import Footer from './sections/footer/Footer';
import Header from './sections/header/Header';
import Navbar from './sections/navbar/Navbar';
import Project from './sections/project/Project';

function App() {
  return (
    <div className="App">
        <Navbar/>
        <Header/>
        <About/>
        <Project/>
        <Contact/>
        <Footer/>
        <FloatingNav/>
    </div>
  );
}

export default App;
