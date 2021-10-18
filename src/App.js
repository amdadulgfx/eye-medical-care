import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Login from './components/Login/Login/Login';
import ServiceDetails from './components/Home/ServiceDetails/ServiceDetails';
import NotFound from './components/NotFound/NotFound';
import Footer from './components/Shared/Footer/Footer';
import Navigationbar from './components/Shared/Navbar/Navigationbar';
import Register from './components/Register/Register';

function App() {
  return (
    <div className="App ">
      <Router>
        <Navigationbar></Navigationbar>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='/home'>
            <Home></Home>
          </Route>
          <Route path='/login'>
            <Login></Login>
          </Route>
          <Route path='/register'>
            <Register></Register>
          </Route>
          <Route path='/service-details'>
            <ServiceDetails></ServiceDetails>
          </Route>
          <Route path='*'>
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
