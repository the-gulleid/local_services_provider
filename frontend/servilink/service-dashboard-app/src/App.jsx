import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';

// Layouts
import ProviderLayout from './layouts/ProviderLayout';
import UserLayout from './layouts/UserLayout';

// Provider Pages
import ProviderOverview from './pages/provider/DashboardOverview';
import BookingRequests from './pages/provider/BookingRequests';
import MyServices from './pages/provider/MyServices';
import ActiveJobs from './pages/provider/ActiveJobs';
import ProviderReviews from './pages/provider/Reviews';
import ProviderProfile from './pages/provider/Profile';

// User Pages
import UserOverview from './pages/user/DashboardOverview';
import ApplicationServices from './pages/user/ApplicationServices';
import MyBookings from './pages/user/MyBookings';
import UserProfile from './pages/user/Profile';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />

        {/* Provider Routes */}
        <Route path="/provider" element={<ProviderLayout />}>
          <Route index element={<ProviderOverview />} />
          <Route path="requests" element={<BookingRequests />} />
          <Route path="services" element={<MyServices />} />
          <Route path="jobs" element={<ActiveJobs />} />
          <Route path="reviews" element={<ProviderReviews />} />
          <Route path="profile" element={<ProviderProfile />} />
        </Route>

        {/* User Routes */}
        <Route path="/user" element={<UserLayout />}>
          <Route index element={<UserOverview />} />
          <Route path="applications" element={<ApplicationServices />} />
          <Route path="bookings" element={<MyBookings />} />
          <Route path="profile" element={<UserProfile />} />
          {/* Reuse Reviews for user or create new if needed. For now redirect or reuse. 
              User request list didn't explicitly ask for user reviews page content, 
              but it's in the sidebar. I'll point it to a placeholder or reuse. */}
          <Route path="reviews" element={<ProviderReviews />} />
        </Route>

        {/* Redirects */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
