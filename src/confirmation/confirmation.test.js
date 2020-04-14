const React = require('react'),
    ReactDomServer = require('react-dom/server'),
    assert = require('chai').assert,
    esc = require('escape-html'),
    ShallowRenderer = require('react-test-renderer/shallow');
const toMarkup = ReactDomServer.renderToStaticMarkup;
const create = React.createElement;
const renderer = new ShallowRenderer();
let Confirmation = require('./confirmation');
let Notification = require('../Notification/notification');

describe('Confirmation', function () {
    it('should render to markup', function () {
        // withBootstrapStyles();
        let markup = toMarkup(create(Confirmation, { message: 'Would you like a slice of pie?' }));
        console.log(markup);
        assert(markup, 'No markup was returned from Confirmation');
    });
    it('should render a notification', function () {
        renderer.render(create(Confirmation, { message: 'Still want the pie?' }));
        const result = renderer.getRenderOutput();
        console.log(result.type)
        assert.equal(result.type, Notification)
    });
})