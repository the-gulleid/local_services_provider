import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DashboardLayout from './layouts/DashboardLayout';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Users from './pages/Users';
import Providers from './pages/Providers';
import Bookings from './pages/Bookings';
import Services from './pages/Services';
import Analytics from './pages/Analytics';
import Profile from './pages/Profile';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route path="/" element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="users" element={<Users />} />
          <Route path="providers" element={<Providers />} />
          <Route path="bookings" element={<Bookings />} />
          <Route path="services" element={<Services />} />
          <Route path="analytics" element={<Analytics />} />
          <Route path="profile" element={<Profile />} />
          <Route path="settings" element={<div className="p-10">Settings Page</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
