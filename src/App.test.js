let ReactDomServer = require('react-dom/server'),
    React = require('react'),
    assert = require('chai').assert,
    esc = require('escape-html');
const toMarkup = ReactDomServer.renderToStaticMarkup;
const toString = ReactDomServer.renderToString;
const create = React.createElement;
const App = require('./App')


describe('Notification', () => {
    it('should render to some HTML', function () {
        withBootstrapStyles();
        let component = create(App, { notification: { message: 'Hello World!' } });
        console.log('Rendering:<br/>' + toString(component));
        console.log('Actual Markup:<br/>' + esc(toMarkup(component)));
    })
    it('should contain the message I pass in', function () {
        let message = 'Notification to the end-user!'
        let app = create(App, { notification: { message } });
        assert.include(toMarkup(app), message)
    })
});