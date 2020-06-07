import React from 'react';
import ReactDOM from 'react-dom';
import SiderDemo from './Navi/Navi'
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    <SiderDemo />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
