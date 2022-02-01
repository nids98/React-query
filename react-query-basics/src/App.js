import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Route, Link , Routes} from "react-router-dom";
import Home from "./components/Home.page";
import SuperHeroes from "./components/SuperHeroes.page";
import RQSuperHeroes from "./components/RQSuperHeroes.page";

function App() {
  return (
    <Router>
      <div>
          <nav>
              <ul>
                  <li>
                      <Link to="/">Home</Link>
                  </li>
                  <li>
                      <Link to="/super-heroes">Traditional Super hero</Link>
                  </li>
                  <li>
                      <Link to="/rq-super-heroes">RQ Super hero</Link>
                  </li>
              </ul>
          </nav>
          <Routes>
              <Route path="/super-heroes" element={<SuperHeroes />} />
              <Route path="/rq-super-heroes" element={<RQSuperHeroes />} />
              <Route path="/" element={<Home />} />
          </Routes>
      </div>
    </Router>
  );
}

export default App;
