import Question from "./Question";
import exam from '../qcm'


function Formular (){
  //  console.log("Yolo")
    return (
        <div>
            <p className="intro">Bienvenue, pour procéder au QCM merci de commencer juste en dessous en vous présenter</p>
            <form action="#" method="GET"> {/*action="#" method="get" pour tester en local // Remplacer # par votre cible et get par post*/}
                {exam.map((element, index)=>( //on boucle sur les questions du qcm
                    <Question objectQuestion={element} key={index}/>

                ))}
                <input className="submit" type="submit" value="Envoyer"/>
            </form>
        </div>
    )
}

export default Formular