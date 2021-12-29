import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './App.css';

import { BrowserRouter } from "react-router-dom";

import Router from './Router';
import Logo from '../components/templates/Logo';
import Nav from '../components/templates/Nav';
import Footer from '../components/templates/Footer';

export default function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Logo />
        <Nav />
        <Router />
        <Footer />
      </div>
    </BrowserRouter>
  )
}
