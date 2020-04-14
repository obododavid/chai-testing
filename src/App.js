let React = require('react');
let Notification = require('./Notification/notification');
let Confirmation = require('./confirmation/confirmation');


//----------------------------------------------------------------------
//For Notification
//----------------------------------------------------------------------

function App(props) {
  const { message, type } = props.notification;
  return (<div id='app'>
    {message && <Notification message={message} type={type} />}
    <Confirmation />
  </div>);
}




module.exports = App;