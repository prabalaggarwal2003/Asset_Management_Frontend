import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/home'
import Dashboard from './pages/dashboard'
import Admin_dashboard from './pages/admin_dashboard'
import Form from './pages/form'
import axios from 'axios'

axios.defaults.baseURL = process.env.URI

export default function App() {
  return (
    <div>
      <Router>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/admin_dashboard" element={<Admin_dashboard />} />
        <Route path="/form" element={<Form />} />
      </Routes>
      </Router>
  </div>

  );
}

