import CheckBoxQuestion from './CheckBoxQuestion';
import RadioQuestion from "./RadioQuestion";
import TextQuestion from "./TextQuestion";


function Question ({objectQuestion}) {
    // console.log("question question", objectQuestion.question)
    // console.log("question answer", objectQuestion.answer)
    // console.log("question type", objectQuestion.answer.type)

    /*
     2.on déclare la fonction dispQuestion, avec un paramètre questionToBeDisplayed,
     */
    function dispQuestion (questionToBeDisplayed) {

        if (questionToBeDisplayed.answer.type === "checkbox") {
            return (
                <div>


                  {/*dans la fonction dispQuestion, si la question est de type checkbox, on appelle le component*/}
                  {/*CheckBoxQuestion avec une props objectQuestion qui contiendra ce qu'on aura passé comme argument*/}
                  {/*à la fonction dispQuestion*/}

                    <CheckBoxQuestion objectQuestion={questionToBeDisplayed}></CheckBoxQuestion>
                </div>
            )
        } else if (questionToBeDisplayed.answer.type === "radio") {
            return (
                <div>
                    <RadioQuestion objectQuestion={questionToBeDisplayed}></RadioQuestion>
                </div>
            )

        } else if (questionToBeDisplayed.answer.type === "text") {
            return (
                <div>
                    <TextQuestion objectQuestion={questionToBeDisplayed}></TextQuestion>
                </div>
            )
        } /*else if (questionToBeDisplayed.answer.type === "toggle") {
            return (
                <div>
                    <ToggleQuestion objectQuestion={questionToBeDisplayed}></ToggleQuestion>
                </div>
            )
        }*/
    }

    /*
    * 1 - dans le return du component question, on appelle la fonction dispQuestion avec objectQuestion comme argument
    * */
    return (
        <div>
            {dispQuestion(objectQuestion)}
        </div>
    )
}

export default Question