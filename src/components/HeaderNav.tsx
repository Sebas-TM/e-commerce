import '../styles/header.css'
import ContainerHeader from "./header/ContainerHeader";

interface HeaderNavProps {
    cart: number
}

const HeaderNav = ({ cart }: HeaderNavProps) => {

    return (

        <header className="header header-nav">
            <div className="container-dark">
                <ContainerHeader cart={cart} />
            </div>
        </header>
    );
}

export default HeaderNav;