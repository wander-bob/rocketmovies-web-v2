import {Routes, Route, Navigate } from "react-router-dom";
import { Home } from "../pages/Home";
import { Profile } from "../pages/Profile";
import { MovieNote } from "../pages/MovieNote";
import { NewMovieNote } from "../pages/NewMovieNote";
export function AppRoutes(){
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="new-movie-note" element={<NewMovieNote/>} />
      <Route path="/movie-note/:id" element={<MovieNote />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  )
}