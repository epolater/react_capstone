import { Titles } from "./BookingPage";
import { useNavigate } from "react-router-dom";

const BookingConfirmed = () => {

    const navigate = useNavigate()
    function handleRedirect () {navigate("/")}

    return (
        <>
        <Titles></Titles>
        <div class="confirmation-container">
            <h1>Your booking is confirmed.<br></br> Thank you</h1>
            <button onClick={handleRedirect}>Back to Home Page</button>
        </div>
        
        </>
    )
}

export default BookingConfirmed