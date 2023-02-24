import { Routes, Route } from "react-router-dom";
import Home from "../pages/homepage";
import Login from "../pages/login";
const Router = () => (
  <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  </>
);

export default Router;
