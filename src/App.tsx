import cityApi from 'api/cityApi';
import { NotFound, PrivateRoute } from 'components/Common';
import { AdminLayout } from 'components/Layout';
import LoginPage from 'features/auth/pages/LoginPage';
import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

function App() {
  useEffect(() => {
    cityApi.getAll().then((data) => console.log(data));
  });

  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route element={<PrivateRoute />}>
        <Route path="/admin" element={<AdminLayout />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
