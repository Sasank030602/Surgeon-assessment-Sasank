import { useState } from "react";
import "./App.css";
import SideBar from "./components/SideBar/SideBar";
import TopBar from "./components/TopBar/TopBar";
import Dashboard from "./components/Dashboard/Dashboard";
import SurgerySchedule from "./components/SurgerySchedule/SurgerySchedule";
import ORCalendar from "./components/ORCalendar/ORCalendar";

function App() {
  const [activePage, setActivePage] = useState(0);

  const renderContent = () => {
    switch (activePage) {
      case 0:
      case "Dashboard":
        return <Dashboard />;

      case 1:
      case "Surgery Schedule":
        return <SurgerySchedule />;

      case 2:
      case "OR Calendar":
        return <ORCalendar />;

      case 3:
      case "Surgical Patients":
        return <Dashboard />;

      default:
        return <h2>Select a page... (Value received: {activePage})</h2>;
    }
  };

  return (
    <div style={{ display: "flex", height: "100vh", overflow: "hidden" }}>

      <SideBar
        activePage={activePage}
        onPageChange={setActivePage}
      />

      <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <TopBar />

        <div
          style={{
            padding: "20px",
            flex: 1,
            backgroundColor: "#f4f6f8",
            overflowY: "auto",
          }}
        >
          {renderContent()}
        </div>
      </div>

    </div>
  );
}

export default App;