
import './App.css';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage'
import SideNav from './components/SideNav';
import './index.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="background">
      <div className="container-fluid bodycss">
        <div className="row" >
          <div className="col s12 m11 l11" >
            
            <div>
            
        <Routes>
          <Route  path="/aboutpage" element={<AboutPage />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
          </div>
          <div className="col l1 m1 s12 sidenavmargin">
            <SideNav />
          </div>
        </div>
      </div>
    </div>
    </Router>
  );
}

export default App;
