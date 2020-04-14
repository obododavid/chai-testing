let React = require('react');
let Notification = require('../Notification/notification');


function Confirmation(props) {
    const { message, type } = props
    let alertType;
    switch (type) {
        case 'message':
            alertType = 'alert-info';
            break;
        case 'success':
            alertType = 'alert-success';
            break;
        case 'caution':
            alertType = 'alert-warning';
            break;
        case 'error':
            alertType = 'alert-danger';
            break;
        default:
            alertType = 'alert-info';
    }

    return <Notification message={message} />

}

module.exports = Confirmation