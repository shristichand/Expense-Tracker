import { Link, useNavigate } from "react-router-dom";
useNavigate

const Dashboard = () => {
    const navigate = useNavigate();

    const handleclick = () => {
        navigate('/');

    }
    return (
      <div
        className="h-screen w-64 bg-gradient-to-b from-white to-pink-100 shadow-md flex flex-col px-6 py-6 rounded-lg"
      >
        {/* User Profile */}
        <div className="flex flex-col items-center mb-6">
          <h2 className="text-xl font-semibold text-gray-800">Shristi</h2>
          <p className="text-sm text-gray-600 ">Your Money</p>
        </div>
  
        {/* Navigation */}
        <nav className="flex-1">
          <ul className="space-y-4">
            <li className="flex items-center space-x-3 text-gray-700 hover:text-purple-600 cursor-pointer">
              <i className="fas fa-chart-line"></i>
              <Link to = "/dashboardpage" >Dashboard</Link> 
            </li>
            <li className="flex items-center space-x-3 text-gray-700 hover:text-purple-600 cursor-pointer">
              <i className="fas fa-file-invoice"></i>
              <Link to = "/transaction" >Reminder</Link> 
            </li>
            <li className="flex items-center space-x-3 text-gray-700 hover:text-purple-600 cursor-pointer">
              <i className="fas fa-money-bill-wave"></i>
              <Link to = "/income" >Incomes</Link> 
            </li>
            <li className="flex items-center space-x-3 text-gray-700 hover:text-purple-600 cursor-pointer">
              <i className="fas fa-wallet"></i>
              <Link to = "/expense" >Expenses</Link> 
            </li>
          </ul>
        </nav>
  
        {/* Sign Out */}
        <div className="flex items-center space-x-3 text-gray-500 hover:text-red-600 cursor-pointer mt-6">
          <i className="fas fa-sign-out-alt"></i>
         <button onClick={handleclick}>Sign out</button>
        </div>
      </div>

      
    );
  };
  
  export default Dashboard;
  