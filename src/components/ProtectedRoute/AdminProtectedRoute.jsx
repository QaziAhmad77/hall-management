/* eslint-disable no-undef */
import { Navigate } from "react-router-dom";

const AdminProtectedRoute = ({ children }) => {
    const admin = JSON.parse(localStorage.getItem("currentUser"));
    if (admin?.role === "admin") {
        return children;
    } else {
        return <Navigate to="/halls" />;
    }
};

export default AdminProtectedRoute;
