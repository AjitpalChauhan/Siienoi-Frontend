// import { useSelector } from 'react-redux';
// import { Navigate } from 'react-router-dom';
// import { selectLoggedInUser } from '../authSlice';
// import { selectUserInfo } from '../../user/userSlice';

// function Protected({ children }) {
//   const user = useSelector(selectLoggedInUser);
//   const userInfo = useSelector(selectUserInfo)

//   if(user === undefined || userInfo === undefined){
//     return<div>Loading...</div>
//   }

//   if (!user) {
//     return <Navigate to="/login" replace={true}></Navigate>;
//   }
//   if (userInfo && userInfo.role ==='admin') {
//     return <Navigate to="/admin" replace={true}></Navigate>;
//   }else if (userInfo && userInfo.role ==='user'){
//     return <Navigate to="/" replace={true}></Navigate>;
//   }
//   return children;
// }

// export default Protected;