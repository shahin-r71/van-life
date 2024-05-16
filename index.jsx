import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Vans from "./pages/Vans"
import Van from "./pages/Van"
import Layout from './components/Layout';
import HostLayout from './components/HostLayout';
import './server';
import Dashboard from './pages/Host/Dashboard';
import Income from './pages/Host/Income';
import Review from './pages/Host/Review';
import HostVans from './pages/Host/HostVans/HostVans';
import HostVansDetail from './pages/Host/HostVans/HostVansDetail';
import HostVanDescription from './pages/Host/HostVans/HostVanDescription';
import HostVanPricing from "./pages/Host/HostVans/HostVanPricing";
import HostVanPhotos from './pages/Host/HostVans/HostVanPhotos';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="host" element={<HostLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="income" element={<Income />} />
            <Route path="vans" element={<HostVans />} />
            <Route path="vans/:id" element={<HostVansDetail />}>
              <Route index element={<HostVanDescription />} />
              <Route path="pricing" element={<HostVanPricing />} />
              <Route path="photos" element={<HostVanPhotos />} />
            </Route>
            <Route path="review" element={<Review />} />
          </Route>
          <Route path="/about" element={<About />} />
          <Route path="/vans" element={<Vans />} />
          <Route path="/vans/:id" element={<Van />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM
  .createRoot(document.getElementById('root'))
  .render(<App />);