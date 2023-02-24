import { Routes, Route } from "react-router-dom";
import Home from "../pages/homepage";
import Error from "../pages/error";
import ForgetPassword from "../pages/forget-password";
import Register from "../pages/register";
import Login from "../pages/login";
const Router = () => (
  <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/error" element={<Error />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} /> 
      <Route path="/forget-password" element={<ForgetPassword />} />
    </Routes>
  </>
);

export default Router;
