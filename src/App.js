let React = require('react');
let Notification = require('./Notification/notification');
let Confirmation = require('./confirmation/confirmation');
let QuestionList = require('./questions/questionList');
let questions = require('./questions/questions');


//----------------------------------------------------------------------
//For Notification
//----------------------------------------------------------------------

function App(props) {
  const { message, type } = props.notification;
  return (<div id='app'>
    {message && <Notification message={message} type={type} />}
    <Confirmation />
    <QuestionList questions={questions} />
  </div>);
}




module.exports = App;