let React = require('react');
let QuestionContainer = require('./questionContainer');
let question_props = require('./questions');

function QuestionList(props = question_props) {
    const { questions } = props
    return (
        <div className='list-wrapper'>
            {questions.map((_questions, i) => {
                return <QuestionContainer questions={_questions} key={i} />
            })}
        </div>
    )
}

module.exports = QuestionList