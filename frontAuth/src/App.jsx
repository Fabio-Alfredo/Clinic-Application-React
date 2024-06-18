import { BrowserRouter, Route, Routes } from "react-router-dom"
import SignIn from "./getIn/SignIn"
import SignUp from "./getIn/SignUp"
import Home from "./pages/Home"
import ListPacients from "./pages/ListAppoinments"
import CreationAppoinment from "./pages/CreationAppoinment"
import ApprovedAppointment from "./pages/ApprovedAppointment"
import ListPrescription from "./pages/ListPrescriptions"
import RecordUser from "./pages/RecordUser"
import ListScheduleAppointmets from "./pages/ListScheduleAppointmets"
import { useContext } from "react"
import { AuthContext } from "./context/AuthContext"
import ProtectedRoute from "./protected/ProtectedRoute"
import CreateHistoric from "./pages/CreateHistoric"

const App = () => {

  const { token, roles } = useContext(AuthContext)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/SignUp" element={<SignUp />} />

          <Route element={<ProtectedRoute canActivate={token} redirectPath="/Home" />} >
            <Route path="/Home" element={<Home />} />
          </Route>

          {/* ruta 1 */}
          <Route element={<ProtectedRoute canActivate={token} />} >
            <Route path="/create/appointment" element={<CreationAppoinment />} />
          </Route>

          {/* ruta 2 */}
          <Route element={<ProtectedRoute canActivate={token} RequiredRoles={['ASST']} userRoles={roles} redirectPath="/Home" />} >
            <Route path="/approved/appointent" element={<ApprovedAppointment />} />
          </Route>

          {/* route 3 */}
          <Route element={<ProtectedRoute canActivate={token} RequiredRoles={['PCTE']} userRoles={roles} redirectPath="/Home" />} >
            <Route path="/appointments" element={<ListPacients />} />
          </Route>

          {/* ruta 4 */}
          <Route element={<ProtectedRoute canActivate={token} RequiredRoles={['DCTR']} userRoles={roles} redirectPath="/Home" />} >
            <Route path="/schedule" element={<ListScheduleAppointmets />} />
          </Route>

          {/* ruta 5 */}
          <Route element={<ProtectedRoute canActivate={token} RequiredRoles={['DCTR']} userRoles={roles} redirectPath="/Home" />} >
            <Route path="/prescriptions" element={<ListPrescription />} />
          </Route>

          {/* ruta 7 */}
          <Route element={<ProtectedRoute canActivate={token} RequiredRoles={['DCTR', 'ASST']} userRoles={roles} redirectPath="/Home" />} >
            <Route path="/create/historic" element={<CreateHistoric />} />
          </Route>

          {/* ruta 8 */}
          <Route element={<ProtectedRoute canActivate={token} RequiredRoles={['PCTE']} userRoles={roles} redirectPath="/Home" />} >
            <Route path="/record/user" element={<RecordUser />} />
          </Route>

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
