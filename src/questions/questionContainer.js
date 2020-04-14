let React = require('react');

function QuestionContainer(props) {
    // const { questions } = props;
    // const { question, answer } = questions
    return (
        <div className='question-wrapper'>
            {/* <p>{question}</p> */}
            {/* {showConfirmation &&  <Confirmation/>} */}
            {/* <p className="question">{question}</p> */}
            <div className="btn btn-primary show-answer">Show Answer</div>
            {/* {showConfirmation && <p className="answer"></p>} */}
        </div>
    )
}

module.exports = QuestionContainer