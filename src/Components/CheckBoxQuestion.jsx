

/*
* On déclare notre component avec le bon paramètre, ie celui qu'on a indiqué lors de l'appel, dans Question.jsx
* et ça roule comme sur des roulettes ;)
* */
function CheckBoxQuestion({objectQuestion}){
    console.log("checkbox, q", objectQuestion.question)
    console.log( "checkboxQuestion, q.answer", objectQuestion.answer)
    objectQuestion.answer.options.map((option, index) => (
        console.log(option)
    ))
    return (
        <div>
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