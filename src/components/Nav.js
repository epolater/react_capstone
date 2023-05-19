import Logo from  "./images/Logo.svg"

const Nav = () => {
    return (
        <nav class="nav-bar">
            <img src={Logo} alt="Logo" class="logo"></img>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#menu">Menu</a></li>
                <li><a href="#reservations">Reservations</a></li>
                <li><a href="#orderonline">Order Online</a></li>
                <li><a href="#login">Login</a></li>
            </ul>
        </nav>
    )
}

export default Nav