import CheckBoxQuestion from './CheckBoxQuestion';
import RadioQuestion from "./RadioQuestion";
import TextQuestion from "./TextQuestion";
import ToggleQuestion from "./ToggleQuestion";


function Question ({objectQuestion}) {

   //  2.on déclare la fonction dispQuestion, avec un paramètre questionToBeDisplayed,

    function dispQuestion (questionToBeDisplayed) {
// pour chaque type de question on renvoi au component adéquat
        if (questionToBeDisplayed.answer.type === "checkbox") {
            return (
                <div>
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
        } else if (questionToBeDisplayed.answer.type === "toggle") {
            return (
                <div>
                    <ToggleQuestion objectQuestion={questionToBeDisplayed}></ToggleQuestion>
                </div>
            )
        }
    }


//Enfin dans le return du component question, on appelle la fonction dispQuestion avec objectQuestion comme argument

    return (
        <div>
            {dispQuestion(objectQuestion)}
        </div>
    )
}

export default Question