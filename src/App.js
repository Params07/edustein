
import Nav from './Nav.js'
import Register from './NavComponents/Register.js';
import Contact from './NavComponents/Contact.js';
import Program from './NavComponents/Program.js';
import About from './NavComponents/About.js';
import { GlobalStateProvider } from './UseContextComponents/GlobalStateProvider.js';
import Home from './NavComponents/Home.js';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import ActiveBootcamps from './BootcampComponents/ActiveBootcamps.js'
function App() {
  return (
    <GlobalStateProvider>
     <Router>
        <Nav />
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <Home />
                <Program />
                <About />
                <Contact />
               
              </div>
            }
          />
          <Route path="/activecamps" element={<ActiveBootcamps />} />
        </Routes>
        <Register />
      </Router>
  </GlobalStateProvider>
  );
}

export default App;
