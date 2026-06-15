import React from "react";
import "../../App.css";
import { FiCalendar, FiScissors, FiCheckCircle, FiUsers } from "react-icons/fi";

function Dashboard() {
  console.log("Dashboard loaded");

  return (
    <div className="container-fluid mt-3">
      <div className="mb-4">
        <h4 className="fw-bold">Surgical Dashboard</h4>
        <p className="text-muted small">
          Operating room schedule and surgical patient management
        </p>
      </div>

      <div className="row">
        <div className="col-md-3">
          <div className="bg-white p-3 shadow-sm" style={{borderRadius: "16px"}}>
            <FiCalendar size={18} />
            <p>Upcoming Surgeries</p>
            <h5>1 Scheduled</h5>
          </div>
        </div>

        <div className="col-md-3">
          <div className="bg-white p-3 shadow-sm" style={{borderRadius: "16px"}}>
            <FiScissors size={18} />
            <p>In Progress</p>
            <h5>1 Active</h5>
          </div>
        </div>

        <div className="col-md-3">
          <div className="bg-white p-3 shadow-sm" style={{borderRadius: "16px"}}>
            <FiCheckCircle size={18} />
            <p>Completed</p>
            <h5>8 This Week</h5>
          </div>
        </div>

        <div className="col-md-3">
          <div className="bg-white p-3 shadow-sm" style={{borderRadius: "16px"}}>
            <FiUsers size={18} />
            <p>Surgical Patients</p>
            <h5>23 Patients</h5>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="bg-white border mx-3 mt-4 p-4 rounded-16" style={{borderRadius: "16px"}}>
          <div className="schedule-title">Today's OR Schedule</div>
          <div className="schedule-item schedule-item-blue">
            <div className="d-flex justify-content-between align-items-start mb-3">
              <div className="d-flex align-items-center gap-3">
                <span
                  className="fw-bold text-dark"
                  style={{ fontSize: "1.1rem" }}
                >
                  Coronary Artery Bypass Graft (CABG)
                </span>
                <span className="status-badge badge-blue">scheduled</span>
              </div>
              <button className="action-btn btn-blue">Start Prep</button>
            </div>
            <div className="scheduled-details">
              <div>Patient: Robert Taylor (PAT005)</div>
              <div>OR: OR-1</div>
              <div>Time: 08:00</div>
              <div>Duration: 4-5 hours</div>
            </div>
            <hr />
            <div>
              <div className="team-label">Surgical Team:</div>
              <div className="team-pills">
                <span className="team-pill">Dr. Emily Chen</span>
                <span className="team-pill">Dr. Mark Sullivan</span>
                <span className="team-pill">Anesthesiologist Dr. Kumar</span>
                <span className="team-pill">Surgical Nurse Team A</span>
              </div>
            </div>
          </div>

          <div className="schedule-item schedule-item-orange">
            <div className="d-flex justify-content-between align-items-start mb-3">
              <div className="d-flex align-items-center gap-3">
                <span
                  className="fw-bold text-dark"
                  style={{ fontSize: "1.1rem" }}
                >
                  Laparoscopic Cholecystectomy
                </span>
                <span className="status-badge badge-orange">in-progress</span>
              </div>
              <button className="action-btn btn-gray">View</button>
            </div>
            <div className="scheduled-details">
              <div>Patient: Patricia Johnson (PAT010)</div>
              <div>OR: OR-2</div>
              <div>Time: 10:00</div>
              <div>Duration: 1-2 hours</div>
            </div>
            <hr />
            <div>
              <div className="team-label">Surgical Team:</div>
              <div className="team-pills">
                <span className="team-pill">Dr. Michael Barrett</span>
                <span className="team-pill">Anesthesiologist Dr. Patel</span>
                <span className="team-pill">Surgical Nurse Team B</span>
              </div>
            </div>
          </div>

          <div className="schedule-item schedule-item-gray">
            <div className="d-flex justify-content-between align-items-start mb-3">
              <div className="d-flex align-items-center gap-3">
                <span
                  className="fw-bold text-dark"
                  style={{ fontSize: "1.1rem" }}
                >
                  Total Knee Replacement
                </span>
                <span className="status-badge badge-yellow">prep</span>
              </div>
              <button className="action-btn btn-green">Begin Surgery</button>
            </div>
            <div className="scheduled-details">
              <div>Patient: George Miller (PAT011)</div>
              <div>OR: OR-3</div>
              <div>Time: 13:00</div>
              <div>Duration: 2-3 hours</div>
            </div>
            <hr />
            <div>
              <div className="team-label">Surgical Team:</div>
              <div className="team-pills">
                <span className="team-pill">Dr. Sophia Anderson</span>
                <span className="team-pill">Dr. Kevin Wong</span>
                <span className="team-pill">Anesthesiologist Dr. Lee</span>
                <span className="team-pill">Surgical Nurse Team C</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
