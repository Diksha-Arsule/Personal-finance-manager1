// import React from "react";
// import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
// import Login from "./pages/Login";
// import Dashboard from "./pages/Dashboard";
// import PrivateRoute from "./components/PrivateRoute";

// const App = () => {
//     return (
//         <Router>
//             <Routes>
//                 {/* Redirect '/' to login or dashboard */}
//                 <Route path="/" element={<Navigate to="/login" />} />
                
//                 <Route path="/login" element={<Login />} />
                
//                 {/* Private Route for authenticated users */}
//                 <Route element={<PrivateRoute />}>
//                     <Route path="/dashboard" element={<Dashboard />} />
//                 </Route>
//             </Routes>
//         </Router>
//     );
// };

// export default App;
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import PrivateRoute from "./components/PrivateRoute"; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        
        {/* Private Route for Dashboard */}
        <Route element={<PrivateRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
        
        {/* Default Route */}
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;
