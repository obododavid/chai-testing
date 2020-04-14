let React = require('react');

function Notification(props) {
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

    return (
        <div className={['alert', alertType].join(' ')}>
            {message}
        </div>
    )
}


module.exports = Notification
