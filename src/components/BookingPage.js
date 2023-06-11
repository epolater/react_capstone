import React, {useState} from 'react'

const BookingPage = () => {

    const [resrvation, setReservation] = useState([{
        date: "",
        time: "",
        guest: "",
        occasion: "",
        

    }])

    return (
        <>
        <div class="titles-container" >
            <div class="hero-container2" style={{height:'max-content'}}>
                <div class="titles" style={{height:'max-content'}}>
                    <div class="title-main">Little Lemon</div>
                    <div class="title-sub">Chicago</div>
                </div>
                <img></img>
            </div>
        </div>

        <div class="form-container1">
            <div class="form-container2">
                <form class="bookingform">
                    <p>Booking Details</p>
                    <label htmlFor="res-date">Choose date</label>
                    <input type="date" id="res-date" />
                    <label htmlFor="res-time">Choose time</label>
                    <select id="res-time ">
                        <option>17:00</option>
                        <option>18:00</option>
                        <option>19:00</option>
                        <option>20:00</option>
                        <option>21:00</option>
                        <option>22:00</option>
                    </select>
                    <label htmlFor="guests">Number of guests</label>
                    <input type="number" placeholder="1" min="1" max="10" id="guests" />
                    <label htmlFor="occasion">Occasion</label>
                    <select id="occasion">
                        <option>None</option>
                        <option>Birthday</option>
                        <option>Anniversary</option>
                    </select>
                </form>

                <form class="bookingform">
                    <p>Contact</p>
                    <label htmlFor="first-name">First Name</label>
                    <input type="text" id="first-name" />
                    <label htmlFor="last-name">Last Name</label>
                    <input type="text" id="last-name " />
                    <label htmlFor="phone">Phone Number</label>
                    <input type="number" id="phone" />
                    <label htmlFor="email">e-mail</label>
                    <input type="email" placeholder="example@mail.com" id="email" />
                </form>
            </div>
            <button>Complete the Reservation</button>
        </div>
        </>
    )
}

export default BookingPage