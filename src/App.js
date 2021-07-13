import Navbar from './Navbar'
import Sidebar from './Sidebar'

import Home from './Home'
// import Sidebar from './Sidebar'
// import Main './Main'

import './App.css';
import Devices from './Devices';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="grids">

      <div className="i1">
        < Navbar />
      </div>

      <div className="i2">
        < Sidebar />
      </div>

      <div className="i3">

        <Router>
          <Route path='/Home' component={Home} />


          <Route path='/Devices' component={Devices} />

        </Router>
      </div>

    </div>
  );
}

export default App;
