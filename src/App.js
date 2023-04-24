import './App.css';
import { BrowserRouter as Router, Routes, Route, Link, BrowserRouter } from "react-router-dom";
import Certification from './components/certifications';
import Experiences from './components/experiences';
import Formations from './components/formations';
import ProfileImage from "./components/imageprofil";
import Projets from "./components/projets"
import Accueil from "./components/accueil"
import 'bootstrap/dist/css/bootstrap.min.css';
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

function App() {
  return (
    <BrowserRouter>
      <div>
        <header className="header">
          <ProfileImage />
          <h1>DOUAIBI Houssni</h1>
          <h2>Future ingénieur en informatique et réseau</h2>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
          </svg><a class="link-opacity-100" rel="noopener" target="_blank" href="https://github.com/Houssni-IOS">GitHub</a>
        </header>
        <nav className="navbar navbar-expand-lg navbar-light " style={{background:'#dbedef'}}>
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Accueil
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/formations" className="nav-link">
                Formations
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/experiences" className="nav-link">
                Expériences
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/projets" className="nav-link">
                Projets
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/certification" className="nav-link">
                Certifications
              </Link>
            </li>
          </ul>
        </nav>
        <div className="container mt-4">
          <Routes>
            <Route exact path="/" element={<Accueil />} />
            <Route path="/formations" element={<Formations />} />
            <Route path="/experiences" element={<Experiences />} />
            <Route path="/projets" element={<Projets />} />
            <Route path="/certification" element={<Certification />} />
          </Routes>
        </div>

        <footer className="footer">
          
          <p> hdouaibi8@gmail.com </p>
        </footer>
      </div>
    </BrowserRouter>
  );
}


export default App;