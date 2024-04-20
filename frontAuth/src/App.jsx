import { BrowserRouter, Route, Routes } from "react-router-dom"
import SignIn from "./getIn/SignIn"
import SignUp from "./getIn/SignUp"
import NotFound from "./page/NotFound"
import Home from "./page/Home"
import PrivateRoute from "./getIn/PrivateRoute"
import { useState,useEffect } from "react"

//<PrivateRoute path="/home" isAuthenticated={isAuthenticated} element={<Home/>}/>

const App = () => {

  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem("isAuthenticated") === "true"
  );

  useEffect(() => {
    localStorage.setItem("isAuthenticated", isAuthenticated);
  }, [isAuthenticated]);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<SignIn setIsAuthenticated={setIsAuthenticated} />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/home"
            element={< PrivateRoute isAuthenticated={isAuthenticated} >
              <Home />
            </PrivateRoute>}>
          </Route>
        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App
