import CheckBoxQuestion from './CheckBoxQuestion'

function Question ({q}) {
    console.log(q.question)
    console.log(q.answer)
    console.log(q.answer.type)

    function dispQuestion (q) {

        if (q.answer.type === "checkbox") {
            return (
                <CheckBoxQuestion></CheckBoxQuestion>
            )
        } else {
            return (<p>Hello toi</p>)
        }
    }


    return (
        <div>
            {dispQuestion(q)}
        </div>
    )
}





export default Question