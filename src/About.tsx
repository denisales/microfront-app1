import { Link } from 'react-router-dom'
import './App.css'

function About() {

  return (
    <>
    <h1>About App1</h1>
      <div className="card">
      <br/>
      <Link to="/app1/">Home App1</Link>
      </div>
    </>
  )
}

export default About
