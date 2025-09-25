import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import GuestPage from "./Components/GuestPage/GuestPage";
import Login from "./Components/Login/Login";
import Signup from "./Components/SignUp/SignUp";
import Feed from "./Components/Feed/Feed";
import PostEditor from "./Components/PostEditor/PostEditor";
import ProtectedRoute from "./Components/ProtectedRoute/ProtectedRoute";

export default function App() {
  return (
    <Routes>
      {/* <Route path="/" element={<Navigate to="/guest" replace />} />

      <Route path="/" element={<Navigate to="/feed" replace />} /> */}
      
      {/* <Route path="/" element={<Navigate to="/" replace />} /> */}
      <Route path="/" element={<GuestPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route
        path="/feed"
        element={
          <ProtectedRoute>
            <Feed />
          </ProtectedRoute>
        }
      />
      <Route
        path="/post/new"
        element={
          <ProtectedRoute>
            <PostEditor />
          </ProtectedRoute>
        }
      />
      {/* <Route path="*" element={<Navigate to="/login" replace />} /> */}
      <Route path="*" element={<Navigate to="/" replace />} />

    </Routes>
  );
}