import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import '../src/styles/styles.css'
import Header from './Components/header/header'
import Footer from './Components/footer/footer';
import Landing from './Components/cover/coverLanding';
import Building from './Components/cover/coverBuild';
import Workflow from './Components/cover/coverWorkflow';
import Card from './Components/cover/workflowCard';


ReactDOM.render(
  <>
  <Header />,
  <Landing />,
  <Building />,
  <Workflow />,
  <Footer />,
  </>,
  document.getElementById('root')
);


