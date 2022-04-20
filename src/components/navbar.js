import './NavBar.css'
import img from 'img/logo.png'
import CartWidget from 'CartWidget'
const NavBar = () => {
    return (
        <nav className="NavBar">
            <img src={img} alt="logo" className='logo'/>
            <div>
                <ul>
                    <li>INICIO</li>
                    <li>PRODUCTOS</li>
                    <li>QUIENES SOMOS</li>
                    <li>POLÍTICAS</li>
                    <li>CÓMO COMPRAR</li>
                </ul>
                <CartWidget></CartWidget>
            </div>
        </nav>
    )
}

export default NavBar;