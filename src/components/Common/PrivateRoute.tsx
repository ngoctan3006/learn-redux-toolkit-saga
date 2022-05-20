import React from 'react';
import { Navigate, Outlet, RouteProps } from 'react-router-dom';

export interface PrivateRouteProps {}

export function PrivateRoute(props: RouteProps) {
  // check if user is logged in
  // if yes, show route
  // otherwise, redirect to login page
  const isLoggedIn = Boolean(localStorage.getItem('access_token'));

  return isLoggedIn ? <Outlet /> : <Navigate to="/login" />;
}
