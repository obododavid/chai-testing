// const React = require('react'),
//     ReactDomServer = require('react-dom/server'),
//     assert = require('chai').assert,
//     ReactTestUtils = require('react-addons-test-utils'),
//     questions = require('./questions'); // some dummy data
// const toMarkup = ReactDomServer.renderToStaticMarkup;
// const create = React.createElement;
// const renderer = ReactTestUtils.createRenderer();
// const {
//     findRenderedDOMComponentWithClass,
//     findRenderedComponentWithType,
//     scryRenderedDOMComponentsWithClass,
//     renderIntoDocument,
//     Simulate
// } = ReactTestUtils;

// // Used to workaround `renderIntoDocument` not being able to
// // directly render function component.
// class Wrapper extends React.Component {
//     render() {
//         return this.props.children;
//     }
// }

// describe('QuestionList', function () {
//     it('should render to static markup', function () {
//         let markup = toMarkup(create(QuestionList, { questions }));
//         assert(markup, 'No markup was returned from Question List');
//         showInOutput(markup);
//     });
//     it('should render the questions', function () {
//         // let result = renderIntoDocument(create(QuestionList, { questions }));
//         // Wrap `QuestionList` to workaround `renderIntoDocument` failing to directly render function component
//         let result = renderIntoDocument(create(Wrapper, {}, create(QuestionList, { questions })));
//         let elements = scryRenderedDOMComponentsWithClass(result, 'question');
//         assert.lengthOf(elements, questions.length)
//         showInOutput(elements.map(el => el.outerHTML).join("\n"))
//     })
// })

// describe('QuestionContainer', function () {
//     it('should not show the confirmation by default', function () {
//         let result = renderIntoDocument(create(QuestionContainer, { ...questions[0] }));
//         let alerts = scryRenderedDOMComponentsWithClass(result, 'alert');
//         assert.lengthOf(alerts, 0, 'should be no alert rendered');
//     })
//     it('should render a confirmation after clicking show answer', function () {
//         let result = renderIntoDocument(create(QuestionContainer, { ...questions[0] }));
//         let showButton = findRenderedDOMComponentWithClass(result, 'btn btn-primary show-answer');
//         Simulate.click(showButton);
//         let confirmation = findRenderedDOMComponentWithClass(result, 'alert');
//         assert(confirmation);
//         showInOutput(confirmation.outerHTML);
//     })
// })

// function showInOutput(markup) {
//     withBootstrapStyles();
//     console.log(markup);
// }
