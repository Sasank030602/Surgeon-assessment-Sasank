import React from 'react';
import '../../App.css';
import { 
  FiActivity, 
  FiCalendar, 
  FiUsers, 
  FiUser, 
  FiLogOut, 
  FiX,
  FiScissors 
} from 'react-icons/fi';
import { MdOutlineDashboard } from 'react-icons/md';

function SideBar({ activeTab, setActiveTab }) {
  const handleTabClick = (e, tabName) => {
    e.preventDefault();
    setActiveTab(tabName);
  };

  return (
    <div className="sidebar d-flex flex-column bg-light shadow-sm">
      
      <div className="sidebar-header d-flex justify-content-between align-items-center p-3 mt-2">
        <div className="d-flex align-items-center gap-2">
          <div className="logo-icon text-white rounded p-1 d-flex justify-content-center align-items-center">
            <FiActivity strokeWidth={2.5} size={18} />
          </div>
          <span className="fw-semibold text-dark" style={{ fontSize: '1.05rem' }}>MediCare HIS</span>
        </div>
        <button className="btn btn-link text-secondary p-0">
          <FiX size={20} />
        </button>
      </div>

      
      <div className="sidebar-nav mt-3 flex-grow-1">
        <ul className="nav flex-column">
          <li className="nav-item">
            <a 
              href="#" 
              className={`nav-link d-flex align-items-center gap-3 py-2 px-3 ${activeTab === 'Dashboard' ? 'active' : 'text-secondary'}`}
              onClick={(e) => handleTabClick(e, 'Dashboard')}
            >
              <MdOutlineDashboard size={20} />
              <span>Dashboard</span>
            </a>
          </li>
          <li className="nav-item my-1">
            <a 
              href="#" 
              className={`nav-link d-flex align-items-center gap-3 py-2 px-3 ${activeTab === 'Surgery Schedule' ? 'active' : 'text-secondary'}`}
              onClick={(e) => handleTabClick(e, 'Surgery Schedule')}
            >
              <FiScissors size={20} />
              <span>Surgery Schedule</span>
            </a>
          </li>
          <li className="nav-item my-1">
            <a 
              href="#" 
              className={`nav-link d-flex align-items-center gap-3 py-2 px-3 ${activeTab === 'OR Calendar' ? 'active' : 'text-secondary'}`}
              onClick={(e) => handleTabClick(e, 'OR Calendar')}
            >
              <FiCalendar size={20} />
              <span>OR Calendar</span>
            </a>
          </li>
          <li className="nav-item my-1">
            <a 
              href="#" 
              className={`nav-link d-flex align-items-center gap-3 py-2 px-3 ${activeTab === 'Surgical Patients' ? 'active' : 'text-secondary'}`}
              onClick={(e) => handleTabClick(e, 'Surgical Patients')}
            >
              <FiUsers size={20} />
              <span>Surgical Patients</span>
            </a>
          </li>
        </ul>
      </div>

      
      <div className="sidebar-footer mt-auto p-3 mb-2">
        <div className="user-profile d-flex align-items-center gap-3 mb-3 px-2">
          <div className="user-avatar text-white bg-teal rounded-circle d-flex justify-content-center align-items-center shadow-sm" style={{width: '38px', height: '38px'}}>
            <FiUser size={20} />
          </div>
          <div className="user-info">
            <div className="fw-semibold text-dark" style={{fontSize: '0.9rem', lineHeight: '1.2'}}>Dr. Emily Chen</div>
            <div className="text-secondary" style={{fontSize: '0.8rem'}}>Surgeon</div>
          </div>
        </div>
        <button className="btn btn-logout w-100 d-flex justify-content-center align-items-center gap-2 text-secondary py-2 rounded-3">
          <FiLogOut size={18} />
          <span className="fw-medium">Logout</span>
        </button>
      </div>
    </div>
  );
}

export default SideBar;