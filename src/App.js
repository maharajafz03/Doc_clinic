import './index.css'
import './App.css'
import Home from './components/Home';
import About from './components/About'
import Services from './components/Services';
import Contact from './components/Contact';
import Customers from './components/Customers';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
      <Home/>
      <About/>
      <Services/>
      <Contact/>
      <Customers/>
      <Footer/>
    
    </div>
  );
}

export default App;
