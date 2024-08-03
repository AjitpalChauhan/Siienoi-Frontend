import './App.css'
// import Home from './pages/HomePage.jsx'
// import Error404 from './pages/404.jsx'

import {
  createBrowserRouter,
  BrowserRouter as Router,
  RouterProvider,
  Route,
  Link,
  useLocation,
  Routes
} from 'react-router-dom';
// import AdminHome from './pages/AdminHome.jsx';
// import AllProductsPage from './pages/AllProductsPage.jsx';
// import CartPage from './pages/CartPage.jsx'
// import LoginPage from './pages/LoginPage.jsx'
// import SignupPage from './pages/SignupPage.jsx'
// import ProductDetailPage from './pages/ProductDetailPage.jsx'
// import CheckoutPage from './pages/CheckoutPage.jsx'
// import AddProductPage from './pages/AddProductPage.jsx';
// import ViewProductPage from './pages/ViewProductPage.jsx';
// import AdminAllProductsPage from './pages/AdminAllProductsPage.jsx';
// import AdminAllOrdersPage from './pages/AdminAllOrdersPage.jsx';
// import OrderDetailPage from './pages/OrderDetailPage.jsx';
// import UserProfilePage from './pages/UserProfilePage.jsx';
// import AddAddressPage from './pages/AddAddressPage.jsx';
// import ViewAddressPage from './pages/ViewAddressPage.jsx';
// import AllUserAddressPage from './pages/AllUserAddressPage.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchCurrentUserAsync, selectLoggedInUser } from './slice/Auth/authSlice.js';
// import ProtectedRoute from './components/Protected/Protected.jsx';
import CustomerRoutes from './routes/CustomerRoutes.jsx';
import AdminRoutes from './routes/AdminRoutes.jsx';
import LoginPage from './pages/LoginPage.jsx';
import SignupPage from './pages/SignupPage.jsx';

// export const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Home/>
//   },
//   {
//     path: '/admin',
//     element:<AdminHome/>
//   },
//   {
//     path: '/all-products',
//     element: <AllProductsPage/>
//   },
//   {
//     path: '/cart',
//     element: (<ProtectedRoute> <CartPage/> </ProtectedRoute>)
//   },
//   {
//     path: '/login',
//     element: <LoginPage/>
//   },
//   {
//     path: '/sign-up',
//     element: <SignupPage/>
//   },
//   {
//     path: '/checkout',
//     element: (<ProtectedRoute> <CheckoutPage/> </ProtectedRoute>)
//   },
//   {
//     path: '/product-details/:id',
//     element: <ProductDetailPage/>
//   },
//   {
//     path: '*',
//     element: <Error404/>
//   },
//   {
//     path: '/admin/add-product',
//     element: <AddProductPage/>
//   },
//   {
//     path: '/admin/view-product/:id',
//     element: <ViewProductPage/>
//   },
//   {
//     path: '/admin/all-product',
//     element:<AdminAllProductsPage/>
//   },
//   {
//     path: '/admin/all-orders',
//     element: <AdminAllOrdersPage/>
//   },
//   {
//     path: '/admin/view-orders/:id',
//     element: <OrderDetailPage/>
//   },
//   {
//     path: '/user-profile',
//     element: (<ProtectedRoute> <UserProfilePage/> </ProtectedRoute>)
//   },
//   {
//     path: '/add-address',
//     element: <AddAddressPage/>
//   },
//   {
//     path: '/view-address/:id',
//     element: <ViewAddressPage/>
//   },
//   {
//     path: '/all-addresses',
//     element: <AllUserAddressPage/>
//   },

// ])

function App() {

  const dispatch = useDispatch()
  const user = useSelector(selectLoggedInUser)

  useEffect(()=>{
    if(user){
      console.log('Fetching current user...');
      dispatch(fetchCurrentUserAsync())
    }
  }, [dispatch, user])


  return (
    <>
      <Router>
      <div className='w-full'>
        <Routes>
          <Route path='/login' element={<LoginPage/>} />
          <Route path='/sign-up' element={<SignupPage/>} />
          <Route path="/*" element={<CustomerRoutes />} />
          <Route path="/admin/*" element={<AdminRoutes />} />
        </Routes>
      </div>
    </Router>
    </>
  )
}

export default App
