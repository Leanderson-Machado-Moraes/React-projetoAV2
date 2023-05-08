import "./style.css/"
import Melody from "../../assets/melody.png"
import Kuromi from "../../assets/kuromi.png"

function Header(){
    return(
        <header>
        <div class="links">
            <a href="https://github.com/seu-usuario" target="_blank">
                <img src={Melody} alt="Icone do Github" />
            </a>
            <a href="https://linkedin.com/in/seu-usuario" target="_blank">
                <img src={Kuromi} alt="Icone do Linkedin" />
            </a>
        </div>
        <div class="title">
            <h1>Trabalho do lele</h1>
        </div>
    </header>
    )
}
export default Header