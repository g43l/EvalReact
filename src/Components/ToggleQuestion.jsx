public function ToggleQuestion ({objectQuestion}) {
    return
        <div>
            <h2>{objectQuestion.question}</h2>
            <input type="checkbox" />
            <label htmlFor={objectQuestion.answer.name}></label>
        </div>
    )
}


export default ToggleQuestion