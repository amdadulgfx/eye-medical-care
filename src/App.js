import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Navigationbar from './components/Shared/Navbar/Navigationbar';

function App() {
  return (
    <div className="App ">
      <Router>
        <Navigationbar></Navigationbar>
        <Route exact path='/'>
          <Home></Home>
        </Route>
        <Route path='/home'>
          <Home></Home>
        </Route>
      </Router>
    </div>
  );
}

export default App;
