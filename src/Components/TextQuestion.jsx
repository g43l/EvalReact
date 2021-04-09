function TextQuestion({objectQuestion}){
    console.log("On rentre dans le TextQuestion ;)")

    return (
        <div>
            <label>{objectQuestion.question}</label>
            <input type={objectQuestion.answer.type} className="textInput" name={objectQuestion.answer.name}/>
        </div>
    )

}

export default TextQuestion