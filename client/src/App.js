import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar'
import AllRoutes from './AllRoutes'
import Footer from './components/Footer/footer';
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
          <AllRoutes/>
        
        </Router>
        <Footer/>
    </div>
  );
}

export default App;
