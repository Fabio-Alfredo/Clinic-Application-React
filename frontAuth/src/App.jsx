import { BrowserRouter, Route, Routes } from "react-router-dom"
import SignIn from "./getIn/SignIn"
import SignUp from "./getIn/SignUp"
import Home from "./pages/Home"
import ListPacients from "./pages/ListAppoinments"
import CreationAppoinment from "./pages/CreationAppoinment"
import ApprovedAppointment from "./pages/ApprovedAppointment"
import ListScheduleAppointmets from "./pages/ListScheduleAppointmets"
import { useContext } from "react"
import { AuthContext } from "./context/AuthContext"
import ProtectedRoute from "./protected/ProtectedRoute"

const App = () => {

  const { token, roles } = useContext(AuthContext)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/SignUp" element={<SignUp />} />

          <Route element={<ProtectedRoute canActivate={token} redirectPath="/Home"  />} >
            <Route path="/Home" element={<Home />} />
          </Route>

          {/* ruta 1 */}
          <Route element={<ProtectedRoute canActivate={token} />} >
            <Route path="/create/appointment" element={<CreationAppoinment />} />
          </Route>

          {/* ruta 2 */}
          <Route element={<ProtectedRoute canActivate={token} RequiredRoles={['DCTR', 'ASST']} userRoles={roles} redirectPath="/Home" />} >
            <Route path="/approved/appointent" element={<ApprovedAppointment />} />
          </Route>

          {/* route 3 */}
          <Route element={<ProtectedRoute canActivate={token} redirectPath="/Home" />} >
            <Route path="/appointments" element={<ListPacients />} />
          </Route>

          {/* ruta 4 */}
          <Route element={<ProtectedRoute canActivate={token} RequiredRoles={['DCTR']} userRoles={roles} redirectPath="/Home" />} >
            <Route path="/schedule" element={<ListScheduleAppointmets />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
