import { BrowserRouter, Route, Routes } from "react-router-dom"
import SignIn from "./getIn/SignIn"
import SignUp from "./getIn/SignUp"
import Home from "./pages/Home"

const App = () => {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/Home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
