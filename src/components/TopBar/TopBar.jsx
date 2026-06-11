import React from 'react';
import '../../App.css';
import { FiSearch, FiHome, FiBell } from 'react-icons/fi';

function TopBar() {
  return (
    <div className="topbar d-flex justify-content-between align-items-center px-4 py-2 bg-white">
      
      <div className="search-container position-relative">
        <FiSearch className="search-icon text-secondary position-absolute" size={18} />
        <input 
          type="text" 
          className="form-control search-input text-secondary" 
          placeholder="Search patients, ID, phone..." 
        />
      </div>

      
      <div className="d-flex align-items-center gap-4">
        
        <div className="campus-badge d-flex align-items-center gap-2 px-3 py-1 rounded-pill text-secondary">
          <FiHome size={16} />
          <span className="fw-medium" style={{ fontSize: '0.9rem' }}>Main Campus</span>
        </div>

        
        <div className="position-relative cursor-pointer notification-icon-container">
          <FiBell size={20} className="text-secondary" />
          <span className="position-absolute top-0 start-100 translate-middle p-1 bg-danger border border-light rounded-circle notification-dot">
            <span className="visually-hidden">New alerts</span>
          </span>
        </div>

        
        <div className="user-info text-end ms-2">
          <div className="fw-semibold text-dark" style={{ fontSize: '0.9rem', lineHeight: '1.2' }}>Dr. Emily Chen</div>
          <div className="text-secondary" style={{ fontSize: '0.8rem', textAlign: 'left' }}>Surgery</div>
        </div>
      </div>
    </div>
  );
}

export default TopBar;
