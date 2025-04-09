import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";


import Income from "./pages/Income";
import Dashboard from "./components/Dashboard";
import ExpenseTracker from "./pages/ExpenseTracker";
import Signup from "./pages/Signup";
import Dashboardpage from "./pages/Dashboardpage";


const App = () => (

  <Router>
    <Routes>
   

      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      <Route path="/income" element={<Income/> } />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/dashboardpage" element={<Dashboardpage/>} />

      <Route path="/expense" element={<ExpenseTracker />} />
      

  
      
      {/* <Route path="/income/:id" element={<Income />} /> */}
    </Routes>
  </Router>
);

export default App;
