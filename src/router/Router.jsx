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
import MyHalls from "../pages/MyHalls/MyHalls";
import MyHallDetail from "../pages/MyHallDetail/MyHallDetail";
import BookedHalls from "../pages/BookedHalls/BookedHalls";
import AdminProtectedRoute from "../components/ProtectedRoute/AdminProtectedRoute";
import Checkout from "../pages/Order/Checkout";
import Payment from "../pages/Order/Payment";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="Signin" element={<Signin />} />
        <Route path="register" element={<Register />} />
      </Route>

      <Route
        path="halls"
        element={
          <ProtectedRoute>
            <HotelList />
          </ProtectedRoute>
        }
      />
      <Route
        path="hall/:hallId"
        element={
          <ProtectedRoute>
            <HallDetail />
          </ProtectedRoute>
        }
      />
      <Route
        path="hall/:hallId/book"
        element={
          <ProtectedRoute>
            <Payment />
          </ProtectedRoute>
        }
      />
      <Route
        path="create-hall"
        element={
          <ProtectedRoute>
            <CreateHall />
          </ProtectedRoute>
        }
      />
      <Route
        path="my-halls"
        element={
          <ProtectedRoute>
            <MyHalls />
          </ProtectedRoute>
        }
      />
      <Route
        path="my-hall-detail/:hallId"
        element={
          <ProtectedRoute>
            <MyHallDetail />
          </ProtectedRoute>
        }
      />
      <Route
        path="booked-halls"
        element={
          <ProtectedRoute>
            <BookedHalls />
          </ProtectedRoute>
        }
      />

      <Route
        path="/dashboard"
        element={
          <AdminProtectedRoute>
            <MainLayout />
          </AdminProtectedRoute>
        }
      >
        <Route index element={<Dashboard />} />
        <Route path="users" element={<User />} />
        <Route path="hall-list" element={<Owner />} />
        <Route path="booked-halls" element={<Owner />} />
      </Route>
    </>
  )
);
