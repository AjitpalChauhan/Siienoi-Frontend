import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import AddProductPage from '../pages/AddProductPage'
import ViewProductPage from '../pages/ViewProductPage'
import AdminAllProductsPage from '../pages/AdminAllProductsPage'
import AdminAllOrdersPage from '../pages/AdminAllOrdersPage'
import OrderDetailPage from '../pages/OrderDetailPage'
import AdminDashboard from '../pages/AdminDashboard'
import AdminHeader from '../components/Header/AdminHeader.jsx'

function AdminRoutes() {
  const location = useLocation();
  
  const showNavigation = location.pathname !== "admin";

  return (
    <div>
        {showNavigation && <AdminHeader />}
      <Routes>
      <Route path="/" element={<AdminHome />} />
        <Route path="/dashboard" element={<AdminDashboard />} />
        <Route path="/add-product" element={<AddProductPage />} />
        <Route path="/view-product/:id" element={<ViewProductPage />} />
        <Route path="/all-product" element={<AdminAllProductsPage />} />
        <Route path="/all-orders" element={<AdminAllOrdersPage />} />
        <Route path="/view-orders/:id" element={<OrderDetailPage />} />
      </Routes>
    </div>
  )
}

export default AdminRoutes