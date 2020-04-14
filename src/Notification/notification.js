let React = require('react');

function Notification(props) {
    const { message, type, children } = props
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
            <p>{message}</p>
            {children}
        </div>
    )
}


module.exports = Notification
