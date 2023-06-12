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

    }

    // Fetching API and updatin avalibale times for time selection input
    const updateTimes = (availabletimes, date) => {return fetchAPI(date)}
    const initializeTimes = fetchAPI(new Date())
    const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes)

    // Submit Form and redirect to Confirmation Page
    const navigate = useNavigate()
    function handleSubmit() {
        if (submitAPI(reservation)) {navigate("/bookingconfirmed")}
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
                        <input
                            type="date" id="res-date"
                            value={reservation.date} onChange={(e) => {
                                updatedReservation(e, 'date')
                                dispatch(new Date(e.target.value))
                            }}
                        />

                        {/* Time Select Field */}
                        <label htmlFor="res-time">Choose time</label>
                        <select id="res-time " value={reservation.time} onChange={(e) => updatedReservation(e, 'time')}>
                            {availableTimes.map((option) => {
                                return <option key={option} value={option}>{option}</option>
                            })}
                        </select>

                        {/* Number Of Guests Field */}
                        <label htmlFor="guests">Number of guests</label>
                        <input
                            type="number" placeholder="1" min="1" max="10" id="guests"
                            value={reservation.guests} onChange={(e) => updatedReservation(e, 'guests')}
                        />

                        {/* Occassion Select Field */}
                        <label htmlFor="occasion">Occasion</label>
                        <select id="occasion" value={reservation.occasion} onChange={(e) => updatedReservation(e, 'occasion')}>
                            {["None", "Birthday", "Anniversary"].map((option) => {
                                return <option key={option} value={option}>{option}</option>
                            })}

                        </select>
                    </form>

                    <form class="bookingform">
                        <p>Contact</p>

                        {/* First Name Field */}
                        <label htmlFor="first-name">First Name</label>
                        <input
                            type="text" id="first-name"
                            value={reservation.first_name} onChange={(e) => updatedReservation(e, 'first_name')}
                        />

                        {/* Last Name Field */}
                        <label htmlFor="last-name">Last Name</label>
                        <input
                            type="text" id="last-name "
                            value={reservation.last_name} onChange={(e) => updatedReservation(e, 'last_name')}
                        />

                        {/* Phone Number Field */}
                        <label htmlFor="phone">Phone Number</label>
                        <input
                            type="number" id="phone"
                            value={reservation.phone} onChange={(e) => updatedReservation(e, 'phone')}
                        />

                        {/* email Field */}
                        <label htmlFor="email">e-mail</label>
                        <input
                            type="email" placeholder="example@mail.com" id="email"
                            value={reservation.email} onChange={(e) => updatedReservation(e, 'email')}
                        />
                    </form>
                </div>
                <button onClick={handleSubmit}>Complete the Reservation</button>
            </div>
        </>
    )
}



export default BookingPage