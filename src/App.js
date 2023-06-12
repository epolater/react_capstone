import {Routes, Route} from  'react-router-dom'
import Header from './components/Header'
import Nav from './components/Nav'
import HomePage from './components/HomePage'
import Footer from './components/Footer'
import BookingPage from './components/BookingPage'
import BookingConfirmed from './components/BookingConfirmed'

function App() {

  return (
    <>
      <Header />
      <Nav />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/booking' element={<BookingPage />} />
        <Route path='/bookingconfirmed' element={<BookingConfirmed />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
