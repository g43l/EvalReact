import CheckBoxQuestion from './CheckBoxQuestion'
import Question from "./Question";
import exam from '../qcm'


function Formular (){
    console.log("Yolo")
    return (
        <div>
            <p>Yolo</p>
            <form action="#" method="get">
                {exam.map((question, index)=>(
                    <Question q={question} key={index}/>
                ))}
            </form>


            <CheckBoxQuestion></CheckBoxQuestion>


        </div>
    )

}

export default Formular