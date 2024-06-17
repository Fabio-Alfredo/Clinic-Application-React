import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({ canActivate,children, redirectPath = '/', RequiredRoles=[], userRoles=[] }) => {
    console.log('entro:'+ canActivate)

    if (!canActivate) {
        console.log('entro 1')
        console.log("aqui dentro :"+canActivate)
        return <Navigate to={redirectPath} replace />
    }
    
    if (RequiredRoles.length > 0 && !RequiredRoles.some(role => userRoles.map(r => r.code).includes(role))) {
        console.log('entrou 2')
        return <Navigate to={redirectPath} replace />
    }
    console.log('no entro ')

    return children ? children : <Outlet/>
}

export default ProtectedRoute;