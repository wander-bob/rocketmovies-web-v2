import { Route, Routes, Navigate } from "react-router-dom";
import { SignIn } from "../pages/SignIn";
import { SignUp } from "../pages/SignUp";

export function AuthRoutes(){
  const user = localStorage.getItem("@rocketmovies:user");
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      { !user && <Route path="*" element={<Navigate to="/" />} /> }
    </Routes>
  )
}