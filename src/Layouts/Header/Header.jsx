import './Header.css'
import Nav from '../../UI/Navbarr/Nav'

export const Header = () => {
    return (
        <div id='Head' className='card_neomorfism h-fit flex flex-col' >
            <div>
                <h1>Consumo de Api's</h1>
            </div>
            <div >
                <Nav className='navigation' children={'a'} />
                <Nav className='navigation' children={'a'} />
                <Nav className='navigation' children={'a'} />
            </div>
        </div>
    )
}
export default Header 