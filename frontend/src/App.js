
import './App.css';
import { AllRoutes } from './components/layout/AllRoutes';
import { Footer } from './components/layout/Footer/Footer';
import { Navbar } from './components/layout/Navbar/Navbar';


function App() {
  return (
    <div className="App">
      <Navbar />
      <AllRoutes/>
      <Footer/>
      
    </div>
  );
}

export default App;
