import heroImage from  "../assets/images/restauranfood.jpg"
import { useNavigate } from "react-router-dom";


const Hero = () => {

    const navigate = useNavigate()
    function handleRedirect () {navigate("/booking")}

    return (
        <div class="hero-container">
            <div class="hero-container2">
                <div class="titles">
                    <div class="title-main">Little Lemon</div>
                    <div class="title-sub">Chicago</div>
                    <div class="hero-description">
                        We are a family owned Mediterranean restaurant,
                        focused on traditional recipes served with a modern twist.
                    </div>
                    <button onClick={handleRedirect}>Reserve a Table</button>
                </div>
                <div class="hero-image">
                    <img src={heroImage} alt="heroimage" ></img>
                </div>
            </div>
        </div>
    )
}

export default Hero