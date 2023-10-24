import { useState } from 'react'
import {Route,
  Routes, 
  BrowserRouter as Router} from 'react-router-dom' 
import Home from './containers/Home';
import About from './containers/About';
import Contact from './containers/Contact';
import Listings from './containers/Listings';
import ListingDetail from './containers/ListingDetil';
import Login from './containers/Login';
import SignUp from './containers/Signup';
import Layout from './hoc/Layout';
import NotFound from './components/NotFound';
import './sass/main.scss'

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/about' element={<About />} />
          <Route exact path='/contact' element={<Contact />} />
          <Route exact path='/Listings' element={<Listings />} />
          <Route exact path='/Listings/:id' element={<ListingDetail />} />
          <Route exact path='/Login' element={<Login />} />
          <Route exact path='/signup' element={<SignUp />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
