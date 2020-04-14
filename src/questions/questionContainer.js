let React = require('react');
let Confirmation = require('../confirmation/confirmation');

function QuestionContainer(props) {
    const [showConfirmation, setShowConfirmation] = React.useState(false)
    const { question, answer } = props;
    return (
        <div className='question'>
            {/* <p>{question}</p> */}
            {showConfirmation && <Confirmation />}
            <p className="">{question}</p>
            <div
                className='btn btn-primary show-answer'
                onClick={() => setShowConfirmation(!showConfirmation)}>
                Show Answer
                </div>
            {showConfirmation && <p className="answer">{answer}</p>}
        </div>
    )
}

module.exports = QuestionContainer;