import LogoImage from '../../assets/logo.svg'
import './header.style.css' 

const Header = () =>{
    return (
        <header className= 'header'>
            <div>
<img src = {LogoImage} alt ='logotipo minha listinha com a imagem de avião'/>
            </div>
        </header>
    )
}
export default Header