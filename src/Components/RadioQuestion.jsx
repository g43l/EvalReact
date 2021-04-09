
function RadioQuestion({objectQuestion}){
  //  console.log("radio, q", objectQuestion.question)
  //  console.log( "radioQuestion, q.answer", objectQuestion.answer)
    objectQuestion.answer.options.map((option, index) => (
        console.log(option)
    ))
    return (
        <div className="questionBlock">
            <h2>{objectQuestion.question}</h2>
            <div>
                {objectQuestion.answer.options.map((option, index)=> ( //on boucle sur les options de réponses à la question
                    <div key={index}>
                        <input type={objectQuestion.answer.type} id={option.value} name={objectQuestion.answer.name} value={option.value}/>
                        <label htmlFor={option.value}>{option.text}</label>
                    </div>
                ))}
            </div>
        </div>


    )
}


export default RadioQuestion