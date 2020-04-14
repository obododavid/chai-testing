let React = require('react');
let QuestionContainer = require('./questionContainer');

function QuestionList(props) {
    const { questions } = props
    return (
        <div className='list-wrapper'>
            {questions.map((_questions, i) => {
                const { question, answer } = _questions
                return <QuestionContainer question={question} answer={answer} key={i} />
            })}
        </div>
    )
}

module.exports = QuestionList