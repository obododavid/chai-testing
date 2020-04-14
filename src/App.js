let React = require('react');
let Notification = require('./Notification/notification')


function App(props) {
  const { message, type } = props.notification;
  return (<div id='app'>
    {message && <Notification message={message} type={type} />}
  </div>);
}

module.exports = App;