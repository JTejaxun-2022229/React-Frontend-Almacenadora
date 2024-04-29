import logo from '../../assets/img/almacenadoraLogo.png'

export const Logo = ({ text }) => {
    return (
        <div>
            <img src={logo} alt="WareHouse" />
            <span>{text}</span>
        </div>
    )
}