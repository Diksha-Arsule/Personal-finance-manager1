import { Outlet, Navigate } from "react-router-dom";

const PrivateRoute = () => {
    const isAuthenticated = localStorage.getItem("token") !== null; 
    return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
