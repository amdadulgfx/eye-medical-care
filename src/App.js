import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Login from './components/Login/Login/Login';
import ServiceDetails from './components/Home/ServiceDetails/ServiceDetails';
import NotFound from './components/NotFound/NotFound';
import Footer from './components/Shared/Footer/Footer';
import Navigationbar from './components/Shared/Navbar/Navigationbar';
import Register from './components/Register/Register';
import AuthProvider from './components/contexts/AuthProvider';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';
import Appointment from './components/Appointment/Appointment';
import Doctors from './components/Home/Doctors/Doctors';
import TopServices from './components/Home/TopServices/TopServices';

function App() {
  return (
    <div className="App ">
      <AuthProvider>
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
            <Route path='/doctors'>
              <Doctors></Doctors>
            </Route>
            <Route path='/services'>
              <TopServices></TopServices>
            </Route>
            <PrivateRoute path='/service-details/:serviceId'>
              <ServiceDetails></ServiceDetails>
            </PrivateRoute>
            <PrivateRoute path='/appointment'>
              <Appointment></Appointment>
            </PrivateRoute>
            <Route exact path='*'>
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
