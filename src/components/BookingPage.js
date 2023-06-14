import React, {useState, useReducer} from 'react'
import { useNavigate } from "react-router-dom";
import {fetchAPI, submitAPI} from '../api'

export const Titles = () => {
    return (
        <div class="titles-container" >
        <div class="hero-container2" style={{height:'max-content'}}>
            <div class="titles" style={{height:'max-content'}}>
                <div class="title-main">Little Lemon</div>
                <div class="title-sub">Chicago</div>
            </div>
        </div>
    </div>
    )
}

const BookingPage = () => {

    const [reservation, setReservation] = useState({
        date: "",
        time: "",
        guests: "",
        occasion: "",
        first_name: "",
        last_name:"",
        phone:"",
        email:"",
    })

    function updatedReservation(e, field) {
        const newReservation = {...reservation}
        newReservation[field] = e.target.value
        setReservation(newReservation)
        //console.log(e.target.value)
    }

    // Fetching API and updating avalibale times for time selection input
    const updateTimes = (availabletimes, date) => {return fetchAPI(date)}
    const initializeTimes = fetchAPI(new Date())
    const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes)

    // Submit Form and redirect to Confirmation Page
    const navigate = useNavigate()

    const [validation, setValidation] = useState(true)
    let inputs = 0
    function validate () {
        Object.keys(reservation).forEach((input) => {
            if (reservation[input] === "") {inputs+=1}
        })
        if (inputs > 0) {setValidation(false)}

    }
    

    function handleSubmit() {
        validate()

        if (inputs === 0) {
            if (submitAPI(reservation)) {navigate("/bookingconfirmed")}
        }

    }

    const Warning = (props) => {

        const messages = {
            date: "Please select a date",
            time: "Please select an available time",
            guests: "Please indicate number of guests",
            occasion: "Please select type of ocassion",
            first_name: "Please fill in your name",
            last_name: "Please fill in your last name",
            phone: "Please fill in your phone number",
            email: "Please fill in your e-mail adress",
        }

        let message = ""

        if (reservation[props.id] === "") {message = messages[props.id]}

        //const [message, setMessage] = useState("test")

        if (validation === false) {return <div class="warning" >{message}</div>}
        else {return null}
        
    }

    // Booking Page elements
    return (
        <>
            <Titles></Titles>

            <div class="form-container1">
                <div class="form-container2">
                    <form class="bookingform">
                        <p>Booking Details</p>
                        {/* Date Select Field */}
                        <label htmlFor="res-date">Choose date</label>
                        <input required
                            type="date" id="res-date"
                            value={reservation.date} onChange={(e) => {
                                updatedReservation(e, 'date')
                                dispatch(new Date(e.target.value))
                            }}
                        />
                        <Warning id={"date"}></Warning>

                        {/* Time Select Field */}
                        <label htmlFor="res-time">Choose time</label>
                        <select id="res-time " value={reservation.time} onChange={(e) => updatedReservation(e, 'time')}>
                            {availableTimes.map((option) => {
                                return <option key={option} value={option}>{option}</option>
                            })}
                        </select>
                        <Warning id={"time"}></Warning>

                        {/* Number Of Guests Field */}
                        <label htmlFor="guests">Number of guests</label>
                        <input required
                            type="number"  min="1" max="10" id="guests"
                            value={reservation.guests} onChange={(e) => updatedReservation(e, 'guests')}
                        />
                        <Warning id={"guests"}></Warning>

                        {/* Occassion Select Field */}
                        <label htmlFor="occasion">Occasion</label>
                        <select id="occasion" value={reservation.occasion} onChange={(e) => updatedReservation(e, 'occasion')}>
                            {["None", "Birthday", "Anniversary"].map((option) => {
                                return <option key={option} value={option}>{option}</option>
                            })}

                        </select>
                        <Warning id={"occasion"}></Warning>
                    </form>

                    <form class="bookingform">
                        <p>Contact</p>

                        {/* First Name Field */}
                        <label htmlFor="first-name">First Name *</label>
                        <input required
                            type="text" id="first-name"
                            value={reservation.first_name} onChange={(e) => updatedReservation(e, 'first_name')}
                        />
                        <Warning id={"first_name"}></Warning>

                        {/* Last Name Field */}
                        <label htmlFor="last-name">Last Name</label>
                        <input
                            type="text" id="last-name"
                            value={reservation.last_name} onChange={(e) => updatedReservation(e, 'last_name')}
                        />
                        <Warning id={"last_name"}></Warning>


                        {/* Phone Number Field */}
                        <label htmlFor="phone">Phone Number</label>
                        <input required
                            type="tel" id="phone"
                            value={reservation.phone} onChange={(e) => updatedReservation(e, 'phone')}
                        />
                        <Warning id={"phone"}></Warning>

                        {/* email Field */}
                        <label htmlFor="email">e-mail</label>
                        <input required
                            type="email" placeholder="example@mail.com" id="email"
                            value={reservation.email} onChange={(e) => updatedReservation(e, 'email')}
                        />
                        <Warning id={"email"}></Warning>
                    </form>
                </div>
                <button type="submit" onClick={handleSubmit}>Complete the Reservation</button>
            </div>
        </>
    )
}



export default BookingPage