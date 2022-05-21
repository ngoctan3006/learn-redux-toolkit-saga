import { Button } from '@material-ui/core';
import cityApi from 'api/cityApi';
import { useAppDispatch } from 'app/hooks';
import { NotFound, PrivateRoute } from 'components/Common';
import { AdminLayout } from 'components/Layout';
import { authActions } from 'features/auth/authSlice';
import LoginPage from 'features/auth/pages/LoginPage';
import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    cityApi.getAll().then((data) => console.log(data));
  });

  return (
    <>
      <Button variant="contained" color="primary" onClick={() => dispatch(authActions.logout())}>
        Log out
      </Button>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route element={<PrivateRoute />}>
          <Route path="/admin" element={<AdminLayout />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
