import { Navigate, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { useSelector } from "react-redux";
import { Order } from "./pages/Order";
import "./App.css";
import { TrackOrder } from "./pages/TrackOrder";
import { Orders } from "./pages/Orders";
import { Update } from "./pages/Update";

export const App = () => {
  const user = useSelector((state) => state.user.currentUser);

  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/placeorder" element={<Order />} />
      <Route path="/track" element={<TrackOrder />} />
      <Route path="/orders" element={<Orders />} />
      <Route path="/update/:id" element={<Update />} />

      <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
      {/* //user ? <Navigate to="/" /> */}
      <Route
        path="/register"
        element={user ? <Navigate to="/" /> : <Register />}
      />
    </Routes>
  );
};
