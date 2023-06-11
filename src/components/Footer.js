import logo2 from '../assets/logos/Logo2.png'
import {NavItems} from './Nav'

function Footer () {
    return (
        <>
            <div class="footer-container">
                <div class="footer-container2">
                    <img src={logo2} style={{height:270}} alt="Logo"></img>
                    <div class="footer-navigation">
                        <p>Navigation</p>
                        <NavItems />
                    </div>
                    <div>
                        <p>Contact</p>
                        2395 Maldove Way.<br></br>
                        Chicago Illinois<br></br>
                        (629)-243-6827<br></br>
                        info@littlemon.com

                    </div>
                    <div>
                        <p>Social Media</p>
                        Facebook<br></br>
                        Instgaram<br></br>
                        Twitter<br></br>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer