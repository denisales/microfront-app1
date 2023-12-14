import { useState } from 'react'
import './App.css'
import About from "./About.tsx";
import { Link, Route, Routes } from 'react-router-dom';
// const router = createBrowserRouter(
//   [
//     {
//       path: "/",
//       element: <Home />,
//     },
//     {
//       path: "/About",
//       element: <About />,
//     },
//   ]
//   // {basename: '/app1'}
// );


function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
    </Routes>
  )
}


function Home() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>Home App 1</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <br/>
        <Link to="/">Root</Link>
        <br/>
        <Link to="/about">About App1</Link>
      </div>
    </>
  )
}

export default App
