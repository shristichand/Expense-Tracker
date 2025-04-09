import Dashboard from "../components/Dashboard"

Dashboard
const Dashboardpage = () => {
  return (
    <div className="dashboard-layout">
    <div className="sidebar">
      <Dashboard /> {/* Sidebar navbar */}
    </div>

    <div className="main-content">
    <div>
      <div className="p-8 bg-gradient-to-b from-white to-red-100 rounded-lg shadow-md w-full max-w-5xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">All Transactions</h2>
      <div className="flex justify-between mb-4">
        <div className="flex-1 mr-4">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <div className="flex justify-between items-center">
              <span className="text-gray-500">Income</span>
              <span className="text-green-500 font-bold">Rs.17700</span>
            </div>
          </div>
        </div>
        <div className="flex-1 ml-4">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <div className="flex justify-between items-center">
              <span className="text-gray-500">Expenses</span>
              <span className="text-red-500 font-bold">Rs. 4120</span>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white p-4 rounded-lg shadow-md">
        <div className="flex justify-between items-center">
          <span className="text-gray-500">Total Balance</span>
          <span className="text-green-500 font-bold">Rs. 13580</span>
        </div>
      </div>
      <h2 className="text-2xl font-bold mt-8 mb-4">Recent History</h2>
      <div className="bg-white p-4 rounded-lg shadow-md">
        <div className="flex justify-between items-center mb-2">
          <span className="text-gray-500">Rent</span>
          <span className="text-red-500">Rs.1000</span>
        </div>
        <div className="flex justify-between items-center mb-2">
          <span className="text-gray-500">Freelance</span>
          <span className="text-green-500">Rs.2500</span>
        </div>
        <div className="flex justify-between items-center mb-2">
          <span className="text-gray-500">Fees</span>
          <span className="text-red-500">Rs. 10000</span>
        </div>
      </div>
      <div className="bg-white p-4 rounded-lg shadow-md mt-4">
        <div className="flex justify-between items-center">
          <div>
            <span className="text-gray-500">Salary</span>
            <p className="text-gray-500 text-sm">Min: Rs1200 | Max: Rs8000</p>
          </div>
          <div>
            <span className="text-gray-500">Expense</span>
            <p className="text-gray-500 text-sm">Min: Rs120 | Max: Rs3000</p>
          </div>
        </div>
      </div>
    </div>
    </div>
    </div>
    </div>
  )
}

export default Dashboardpage
