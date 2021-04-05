import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ContactUs from './components/pages/ContactUs';
import Consulting from './components/pages/Consulting';
import Services from './components/pages/Services';
import Home from './components/pages/Home';
import Marketing from './components/pages/Marketing';
import Products from './components/pages/Products';
import FormSignup from './components/pages/FormSignup';
import Client from './components/Client/Client';
import Saisi from './components/saisi';
import Signin from './components/signin';
import Lineaire from './components/lineaire';
import Formm from './components/formm';

// git bush cd desktop cd project .....   code .
import 'antd/dist/antd.css';

function App() {
  return (
   <Router>
    <Navbar />
    <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/services' exact component={Services} />
      <Route path='/products' exact component={Products} />
      <Route path='/contact-us' exact component={ContactUs} />
      <Route path='/sign-up' exact component={FormSignup} />
      <Route path='/marketing' exact component={Marketing} />
      <Route path='/consulting' exact component={Consulting} />
      <Route path='/client' exact component={Client} />
    
      <Route path='/signin' exact component={Signin} />
      <Route path='/saisi' exact component={Saisi} />
      <Route path='/lineaire' exact component={Lineaire} />
      <Route path='/formm' exact component={Formm} />
    
    </Switch>
   </Router>
  );
}

export default App;
