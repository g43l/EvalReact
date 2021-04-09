import Question from "./Question";
import exam from '../qcm'


function Formular (){
    console.log("Yolo")
    return (
        <div>
            <p>Yolo</p>
            <form action="#" method="get">
                {exam.map((element, index)=>(
                    <Question objectQuestion={element} key={index}/>
                    /*
                    * J'ai renommé q en objectQuestion pour refaire le cheminement de A à Z dans ma tête :)
                    * donc ici, on map sur exam et on récupère chaque element du tableau ainsi que son index.
                    * pour chaque element on appelle le component Question en mettant l'élément du tableau exam
                    * dans une props objectQuestion pour rappel, une props, ça se comporte +- comme une variable, ça a
                    * un nom puis tu mets ce que tu veux dedans :)
                    * */
                ))}
                <input className="submit" type="submit" value="Envoyer"/>
            </form>
        </div>
    )
}

export default Formular