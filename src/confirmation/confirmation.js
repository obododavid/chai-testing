let React = require('react');
let Notification = require('../Notification/notification');


function Confirmation(props) {
    // const { message, type } = props;
    const { confirm } = props;
    const state = {
        confirmation: {
            message: 'Should we bake a pie?',
            type: 'message',
            accept: function () {
                // parent component can do something with accept
                confirm()

                // alert('i accest')
            },
            decline: function () {
                // parent component can do something with decline
                alert('i decline')
            }
        }
    }


    const { accept, decline, message, type } = state.confirmation
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
        <Notification message={message} type={type}>
            <div className="btn btn-primary" onClick={accept}>Sure</div>
            <div className="btn btn-danger" onClick={decline}>No Thanks</div>
        </Notification>
    )
}

module.exports = Confirmation