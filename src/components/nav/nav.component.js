import {Logo, StyledNav} from "./nav.styles"
import logo from '../../img/logo.svg'

const NavComponent = () => {
    return (
        <StyledNav>
            <Logo>
                <img src={logo} alt="logo"/>
                <h1>Ignite</h1>
            </Logo>
            <form className="search">
                <input type="text" />
                <button>Search</button>
            </form>
        </StyledNav>
    )
}

export default NavComponent