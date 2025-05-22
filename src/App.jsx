import './App.css'
import Dashboard from './dashboard/Dashboard';
import Sidebar from './sidebar/Sidebar'
import { BrowserRouter } from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
      <div className="bg-gray-200 min-h-screen w-full">
        <div className="mx-auto p-6">
          <Dashboard />
        </div>
      </div>
      <Sidebar />
    </BrowserRouter>
  )
}

export default App
