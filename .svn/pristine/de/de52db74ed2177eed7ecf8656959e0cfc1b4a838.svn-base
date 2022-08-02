import React, { lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

const Login = lazy(() => import("./pages/Login"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const Devices = lazy(() => import("./pages/Devices"));
const Employees = lazy(() => import("./pages/Employees"));
const Reporting = lazy(() => import("./pages/Reporting"));

const AppRoutes: React.FC = () => (
  <Routes>
    <Route path="/" element={<Navigate to="/Login" replace />} />

    <Route path="/Login" element={<Login />} />
    <Route path="/Dashboard" element={<Dashboard />} />
    <Route path="/Devices" element={<Devices />} />
    <Route path="/Employees" element={<Employees />} />
    <Route path="/Reporting" element={<Reporting />} />
  </Routes>
);
export default AppRoutes;
