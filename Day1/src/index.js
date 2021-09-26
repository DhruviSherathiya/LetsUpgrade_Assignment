import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';


ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Content />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);


