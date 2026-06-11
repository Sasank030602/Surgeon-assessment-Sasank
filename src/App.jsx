import { useState } from 'react'
import './App.css'
import SideBar from "./components/SideBar/SideBar"
import TopBar from "./components/TopBar/TopBar"
import Dashboard from "./components/Dashboard/Dashboard"
import SurgerySchedule from "./components/SurgerySchedule/SurgerySchedule"
import ORCalendar from "./components/ORCalendar/ORCalendar"

function App() {
  const [activeTab, setActiveTab] = useState('Dashboard');

  
  const renderContent = () => {
    switch (activeTab) {
      case 'Dashboard':
        return <Dashboard />;
      case 'Surgery Schedule':
        return <SurgerySchedule />;
      case 'OR Calendar':
        return <ORCalendar />;
      case 'Surgical Patients':
        return <Dashboard />;
      default:
        return <div><h2>Select an option</h2></div>;
    }
  };

  return (
    <div style={{ display: 'flex', height: '100vh', overflow: 'hidden' }}>
      <SideBar activeTab={activeTab} setActiveTab={setActiveTab} />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        <TopBar />
        <div style={{ padding: '20px', flex: 1, backgroundColor: '#f4f6f8', overflowY: 'auto' }}>
          {renderContent()}
        </div>
      </div>
    </div>
  )
}

export default App
