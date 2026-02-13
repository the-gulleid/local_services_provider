import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Services from './pages/Services';
import Providers from './pages/Providers';
import About from './pages/About';
import Login from './pages/Login';
import Register from './pages/Register';
import UserDashboard from './pages/user/UserDashboard';
import ProviderDashboard from './pages/provider/ProviderDashboard';
import AdminDashboard from './pages/AdminDashboard';
import ProviderProfile from './pages/ProviderProfile';
import ProtectedRoute from './components/ProtectedRoute';
import { DataProvider } from './context/DataContext';
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <AuthProvider>
      <DataProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="services" element={<Services />} />
              <Route path="providers" element={<Providers />} />
              <Route path="about" element={<About />} />
              <Route path="login" element={<Login />} />
              <Route path="register" element={<Register />} />
              <Route path="provider/:id" element={<ProviderProfile />} />

              {/* Protected Routes */}
              <Route element={<ProtectedRoute allowedRoles={['customer']} />}>
                <Route path="user" element={<UserDashboard />} />
              </Route>
              <Route element={<ProtectedRoute allowedRoles={['provider']} />}>
                <Route path="provider" element={<ProviderDashboard />} />
              </Route>
              <Route element={<ProtectedRoute allowedRoles={['admin']} />}>
                <Route path="admin-dashboard" element={<AdminDashboard />} />
              </Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </DataProvider>
    </AuthProvider>
  );
}

export default App;
