let React = require('react');
let Confirmation = require('../confirmation/confirmation');

function QuestionContainer(props) {
    const { question, answer } = props
    const [showConfirmation, setShowConfirmation] = React.useState(false);
    const [finalConfirmation, setFinalConfirmation] = React.useState(false);
    return (
        <div className='container'>
            {showConfirmation && <Confirmation confirm={() => setFinalConfirmation(true)} />}
            <p className="question">{question}</p>
            <div
                className='btn btn-primary show-answer'
                onClick={() => setShowConfirmation(!showConfirmation)}>
                Show Answer
                </div>
            {finalConfirmation && <p className="answer">{answer}</p>}
        </div>
    )
}

module.exports = QuestionContainer;