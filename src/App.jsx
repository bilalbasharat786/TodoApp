import './App.css'
import Navbar from './components/navbar'
import Card from './components/card'

export default function App() {


 


  return (
    <>
      <Navbar />
      <div className="container">
     <div className="row">
          <Card />
          <Card />
          <Card />
          <Card />
      </div>
      </div>
     

    </>
  )
}
