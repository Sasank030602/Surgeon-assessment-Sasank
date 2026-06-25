import "../../App.css";
import { MdOutlineDashboard } from "react-icons/md";
import { RxPeople } from "react-icons/rx";
import { LuScissors } from "react-icons/lu";
import { CiCalendar } from "react-icons/ci";
import { IoCloseOutline } from "react-icons/io5";
import { CiLogout } from "react-icons/ci";
import { FaRegUserCircle } from "react-icons/fa";
import { TbActivityHeartbeat } from "react-icons/tb";

const Sidebar = ({ activePage, onPageChange }) => {

  const navLinks = [
    { name: "Dashboard", icon: <MdOutlineDashboard size={20} /> },
    { name: "Surgery Schedule", icon: <LuScissors size={20} /> },
    { name: "OR Calendar", icon: <CiCalendar size={20} /> },
    { name: "Surgical Patients", icon: <RxPeople size={20} /> },
  ];

  return (
    <div className="sidebar-container bg-white d-flex flex-column shadow-sm">

      <div className="sidebar-header d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center gap-2">
          <div className="logo-icon">
            <TbActivityHeartbeat size={20} color="white" />
          </div>
          <span className="logo-text">MediCare HIS</span>
        </div>
        <IoCloseOutline size={20} className="text-muted cursor-pointer" />
      </div>

      <div className="sidebar-nav mt-3 flex-grow-1">
        <ul className="nav flex-column">

          {navLinks.map((link) => (
            <li key={link.name} className="nav-item my-1">

              <button
                type="button"
                className={`nav-link d-flex align-items-center gap-3 py-2 px-3 ${
                  activePage === link.name ? "active" : "text-secondary"
                }`}
                onClick={() => onPageChange(link.name)}
                style={{
                  border: "none",
                  background: "none",
                  width: "100%",
                  textAlign: "left",
                  cursor: "pointer",
                  position: "relative"
                }}
              >
                {link.icon}
                <span>{link.name}</span>

                {activePage === link.name && (
                  <div className="active-indicator"></div>
                )}
              </button>

            </li>
          ))}

        </ul>
      </div>

      <div className="sidebar-footer">
        <div className="user-info d-flex align-items-center gap-3">
          <div className="user-avatar flex-shrink-0">
            <FaRegUserCircle size={24} color="rgba(255, 255, 255, 0.8)" />
          </div>

          <div className="d-flex flex-column text-start">
            <span className="user-name">Dr. Emily Chen</span>
            <span className="user-role">Surgeon</span>
          </div>
        </div>

        <button className="btn btn-light d-flex align-items-center justify-content-center gap-2 w-100 logout-btn mt-4 border rounded">
          <CiLogout
            size={16}
            strokeWidth={0.5}
            style={{ transform: "scaleX(-1)" }}
          />
          <span>Logout</span>
        </button>
      </div>

    </div>
  );
};

export default Sidebar;