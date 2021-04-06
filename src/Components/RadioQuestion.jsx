
function RadioQuestion({objectQuestion}){
  //  console.log("radio, q", objectQuestion.question)
  //  console.log( "radioQuestion, q.answer", objectQuestion.answer)
    objectQuestion.answer.options.map((option, index) => (
        console.log(option)
    ))
    return (
        <div>
            <h2>{objectQuestion.question}</h2>
            <div>
                {objectQuestion.answer.options.map((option, index)=> (
                    <div key={index}>
                        <input type={objectQuestion.answer.type} id={objectQuestion.answer.options.value} name={objectQuestion.answer.name} value={objectQuestion.answer.options.value}/>
                        {/*<label htmlFor={objectQuestion.answer.options.value}>{objectQuestion.answer.options.text}</label>*/}
                        <label htmlFor={option.name}>{option.text}</label>
                    </div>
                ))}
            </div>
        </div>


    )
}


export default RadioQuestion