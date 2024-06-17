import { BrowserRouter, Route, Routes } from "react-router-dom"
import SignIn from "./getIn/SignIn"
import SignUp from "./getIn/SignUp"
import Home from "./pages/Home"
import ListPacients from "./pages/ListAppoinments"
import CreationAppoinment from "./pages/CreationAppoinment"
import ApprovedAppointment from "./pages/ApprovedAppointment"
import ListPrescription from "./pages/ListPrescriptions"
import RecordUser from "./pages/RecordUser"

const App = () => {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/appointments" element={<ListPacients />} /> 
          <Route path="/create/appointment" element={<CreationAppoinment />} />
          <Route path="/approved/appointent" element={<ApprovedAppointment />} />
          <Route path="/clinic/prescription" element={<ListPrescription />} />
          <Route path="/history" element={<RecordUser/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
