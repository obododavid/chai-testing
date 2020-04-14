import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
let React = require('react'),
  App = require('./App');

const notification = {
  message: 'I am going to be more badass',
  type: 'success'
}

ReactDOM.render(
  <React.StrictMode>
    <App notification={notification} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
