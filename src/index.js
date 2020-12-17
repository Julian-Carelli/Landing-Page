import React from 'react';
import ReactDOM from 'react-dom';
import './global.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.css'
import App from './routes/App'
import logo from './assets/images/logo.png'
import logoWhite from './assets/images/logoWhite.png'


const showScrollY = () => {

  let scrollY = window.scrollY
  let image = document.getElementById("image")

  if(scrollY > 3925){
    image.src=`${logoWhite}`;
  }
  else{
    image.src=`${logo}`;
  }
}

window.addEventListener("scroll", showScrollY);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

