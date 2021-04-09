
function CheckBoxQuestion({objectQuestion}){
   // console.log("checkbox, q", objectQuestion.question)
   // console.log( "checkboxQuestion, q.answer", objectQuestion.answer)
    objectQuestion.answer.options.map((option, index) => (
        console.log(option)
    ))
    return (
        <div className="questionBlock">
            <h2>{objectQuestion.question}</h2>
            <div>
                {objectQuestion.answer.options.map((option, index)=> (
                    <div key={index}>
                        <input type={objectQuestion.answer.type} id={option.name} name={objectQuestion.answer.name} value={option.name}/>
                        <label htmlFor={option.name}>{option.text}</label>
                    </div>
                ))}
            </div>
        </div>
    )
}


export default CheckBoxQuestion