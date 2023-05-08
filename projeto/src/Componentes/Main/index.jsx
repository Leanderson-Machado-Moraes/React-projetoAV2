import HK from "../../assets/hellokitty.png"
import "./style.css/"

function Main(){
    return(
        <div className="main">
        <img src={HK} alt="Foto de perfil de fulano de tal" />
        <h1>Leanderson</h1>
        <h2>Estudante no Colégio Ulbra São Lucas</h2>
        <p>Tecnologias que mais conheço: </p>
        <ul>
            <li>JavaScript</li>
            <li>Java</li>
            <li>MySql</li>
        </ul>
    </div>
    )
}
export default Main