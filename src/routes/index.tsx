import { Routes, Route } from 'react-router-dom';
import { Navigate } from 'react-router';

import Dashboard from '../Dashboard';
import City from '../City';

function AppRoutes() {
  return (
    <Routes>
      <Route index element={<Navigate to="/dashboard" />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/city/:id" element={<City />} />
    </Routes>
  );
}

export default AppRoutes;
