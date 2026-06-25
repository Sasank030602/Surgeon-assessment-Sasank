import "../../App.css";
import { FiCalendar, FiScissors, FiCheckCircle, FiUsers } from "react-icons/fi";

function Dashboard() {
  console.log("Dashboard loaded");

  return (
    <div className="container-fluid mt-3">
      <div className="mb-3">
              <h2 className="dashboard-title">Surgical Dashboard</h2>
              <div className="dashboard-subtitle">Operating room schedule and surgical patient management</div>
            </div>
      
            
            <div className="summary-cards-wrapper">
              <div className="summary-card">
                <div className="d-flex align-items-center gap-2 mb-2 summary-card-title">
                  <FiCalendar className="icon-blue" size={18} />
                  <span>Upcoming Surgeries</span>
                </div>
                <div className="summary-card-value">1 Scheduled</div>
              </div>
              <div className="summary-card">
                <div className="d-flex align-items-center gap-2 mb-2 summary-card-title">
                  <FiScissors className="icon-orange" size={18} />
                  <span>In Progress</span>
                </div>
                <div className="summary-card-value">1 Active</div>
              </div>
              <div className="summary-card">
                <div className="d-flex align-items-center gap-2 mb-2 summary-card-title">
                  <FiCheckCircle className="icon-green" size={18} />
                  <span>Completed</span>
                </div>
                <div className="summary-card-value">8 This Week</div>
              </div>
              <div className="summary-card">
                <div className="d-flex align-items-center gap-2 mb-2 summary-card-title">
                  <FiUsers className="icon-purple" size={18} />
                  <span>Surgical Patients</span>
                </div>
                <div className="summary-card-value">23 Active</div>
              </div>
            </div>

        <div className="schedule-container bg-white border mt-4 p-4 rounded-16" style={{borderRadius: "16px"}}>
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
              <div>Patient: Robert Taylor (PAT005)&emsp;OR: OR-1</div>
              <div>Time: 08:00&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&ensp;Duration: 4-5 hours</div>
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
              <div>Patient: Patricia Johnson (PAT010)&emsp; OR: OR-2</div>
              <div>Time: 10:00&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;Duration: 1-2 hours</div>
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
              <div>Patient: George Miller (PAT011)&emsp;&ensp; OR: OR-3</div>
              <div>Time: 13:00&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&ensp;Duration: 2-3 hours</div>
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
  );
}

export default Dashboard;
