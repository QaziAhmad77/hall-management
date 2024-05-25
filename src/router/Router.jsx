import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Home from "../pages/Home/Home";
import RootLayout from "../components/Layout/RootLayout/RootLayout";
import Signin from "../pages/Signin/Signin";
import Register from "../pages/Register/Register";
import HotelList from "../pages/HotelList/HotelList";
import SinglePackagePage from "../components/Hall/SinglePackagePage";
import Dashboard from "../pages/Dashboard/Dashboard";
import MainLayout from "../components/Layout/mainLayout/MainLayout";
import User from "../components/Dashboard/User";
import Owner from "../components/Dashboard/Halls";
import CreateHall from "../pages/CreateHall/CreateHall";
import HallDetail from "../pages/HallDetail/HallDetail";
import ProtectedRoute from "../components/ProtectedRoute/ProtectedRoute";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="Signin" element={<Signin />} />
        <Route path="register" element={<Register />} />
      </Route>

      <Route path="halls" element={<ProtectedRoute><HotelList /></ProtectedRoute>} />
      <Route path="hall/:hallId" element={<ProtectedRoute><HallDetail /></ProtectedRoute>} />
      <Route path="create-hall" element={<ProtectedRoute><CreateHall /></ProtectedRoute>} />

      <Route path="/" element={<MainLayout />}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="users" element={<User />} />
        <Route path="hall-list" element={<Owner />} />
      </Route>
    </>
  )
);
