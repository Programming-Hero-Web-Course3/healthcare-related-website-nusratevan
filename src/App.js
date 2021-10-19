import './App.css';
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './pages/home/Home/Home';
import Header from './pages/Shared/Header/Header';
import ServicesBanner from './pages/OurServices/ServicesBanner/ServicesBanner';
import ServicesArea from './pages/OurServices/ServicesArea/ServicesArea';
import NotFound from './pages/home/NotFound/NotFound';
import ServiceDetail from './pages/OurServices/ServiceDetail/ServiceDetail';
import Login from './pages/Login/Login';
import AuthProvider from './pages/context/AuthProvider';
import PrivateRoute from './pages/PrivateRoute/PrivateRoute';
import Doctors from './pages/Doctors/Doctors';
import Footer from './pages/Shared/Footer/Footer';
import AboutUs from './pages/AboutUs/AboutUs';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='/home'>
            <Home></Home>
          </Route>
          <Route path='/services'>
            <ServicesBanner></ServicesBanner>
            <ServicesArea></ServicesArea>
          </Route>
          <PrivateRoute path='/detail/:detailId'>
            <ServiceDetail></ServiceDetail>
          </PrivateRoute>
          <Route path='/doctor'>
            <Doctors></Doctors>
          </Route>
          <PrivateRoute path='/about'>
            <AboutUs></AboutUs>
          </PrivateRoute>
          <Route path='/login'>
            <Login></Login>
          </Route>
          <Route path='*'>
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </AuthProvider>
  );
}

export default App;
