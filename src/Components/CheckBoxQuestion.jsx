//import qcm from "../qcm";


function CheckBoxQuestion(q){
    console.log(q)
    q.answer.options.map((option, index) => (
        console.log(option)
    ))
    return (
        <div>
            <h2>{q.question}</h2>
            {/*<div>*/}
            {/*    {q.answer.map((option, index)=> (*/}

            {/*        <div key={index}>*/}
            {/*            <input type="q.answer.type" id={q.answer.options.value} name="q1" value={q.answer.options.value}/>*/}
            {/*            <label htmlFor={q.answer.options.value}>{q.answer.options.text}</label>*/}

            {/*        </div>*/}
            {/*    ))}*/}
            {/*</div>*/}
        </div>


    )
}


export default CheckBoxQuestion