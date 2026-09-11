import './App.css'
import Header from './components/Header.jsx'
import Gallery from './components/Gallery.jsx'
import BudgetCalculator from './components/BudgetCalculator.jsx'
import ActivityFilter from './components/ActivityFilter.jsx'
import ReservationForm from './components/ReservationForm.jsx'
import Testimonials from './components/Testimonials.jsx'
import Footer from './components/Footer.jsx'

function App() {
  return (
    <>
      <Header />
      <Gallery />
      <BudgetCalculator />
      <ActivityFilter />
      <ReservationForm />
      <Testimonials />
      <Footer/>
    </>
  )
}

export default App