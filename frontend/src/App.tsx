import { Route,Routes } from "react-router-dom"
import Signup from "./Pages/Signup"
import Home from "./Pages/Home"

export default function App() {
  return (
    <>
    <Routes>
      <Route path="/signup" element={<Signup/>}></Route>
      <Route path="/" element={<Home/>}></Route>
    </Routes>

    </>
  )
}