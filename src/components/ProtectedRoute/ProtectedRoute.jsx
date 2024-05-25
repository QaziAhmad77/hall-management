/* eslint-disable no-undef */
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
    if (localStorage.getItem('currentUser')) {
        return children;
    } else {
        return <Navigate to="/signin" />;
    }
};

export default ProtectedRoute;
