import { useState } from 'react';
import "../../App.css";
import { FiCalendar } from 'react-icons/fi';
import SurgeryDetailsModal from './SurgeryDetailsModal';
import ScheduleSurgeryModal from './ScheduleSurgeryModal';

function SurgerySchedule() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isScheduleModalOpen, setIsScheduleModalOpen] = useState(false);
  const [selectedSurgery, setSelectedSurgery] = useState(null);

  return (
    <div className="container-fluid pt-4 pb-4" style={{ fontFamily: "Arial, sans-serif" }}>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h2 style={{ fontSize: "24px", fontWeight: "bold", margin: 0 }}>Surgery Schedule</h2>
          <div className="text-secondary mt-1">Manage surgical procedures and OR bookings</div>
        </div>
        <button className="btn-schedule-surgery" onClick={() => setIsScheduleModalOpen(true)}>
          <FiCalendar size={18} />
          <span>Schedule Surgery</span>
        </button>
      </div>

      <div className="table-container">
        <table className="surgery-table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Time</th>
              <th>Patient</th>
              <th>Procedure</th>
              <th>OR Room</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>2026-01-04</td>
              <td>08:00</td>
              <td>
                <div className="patient-name">Robert Taylor</div>
                <div className="patient-id">PAT005</div>
              </td>
              <td>Coronary Artery Bypass Graft (CABG)</td>
              <td>OR-1</td>
              <td><span className="status-badge badge-blue">scheduled</span></td>
              <td><button className="btn-view-details" onClick={() => {
                setSelectedSurgery({
                  id: "SUR001", patientName: "Robert Taylor", patientId: "PAT005",
                  procedure: "Coronary Artery Bypass Graft (CABG)", date: "2026-01-04", time: "08:00",
                  room: "OR-1", status: "scheduled", badgeClass: "badge-blue",
                  team: ["Dr. Emily Chen", "Dr. Mark Sullivan", "Anesthesiologist Dr. Kumar", "Surgical Nurse Team A"]
                });
                setIsModalOpen(true);
              }}>View Details</button></td>
            </tr>
            <tr>
              <td>2026-01-03</td>
              <td>10:00</td>
              <td>
                <div className="patient-name">Patricia Johnson</div>
                <div className="patient-id">PAT010</div>
              </td>
              <td>Laparoscopic Cholecystectomy</td>
              <td>OR-2</td>
              <td><span className="status-badge badge-orange">in-progress</span></td>
              <td><button className="btn-view-details" onClick={() => {
                setSelectedSurgery({
                  id: "SUR002", patientName: "Patricia Johnson", patientId: "PAT010",
                  procedure: "Laparoscopic Cholecystectomy", date: "2026-01-03", time: "10:00",
                  room: "OR-2", status: "in-progress", badgeClass: "badge-orange",
                  team: ["Dr. Michael Barrett", "Anesthesiologist Dr. Patel", "Surgical Nurse Team B"]
                });
                setIsModalOpen(true);
              }}>View Details</button></td>
            </tr>
            <tr>
              <td>2026-01-03</td>
              <td>13:00</td>
              <td>
                <div className="patient-name">George Miller</div>
                <div className="patient-id">PAT011</div>
              </td>
              <td>Total Knee Replacement</td>
              <td>OR-3</td>
              <td><span className="status-badge badge-yellow">prep</span></td>
              <td><button className="btn-view-details" onClick={() => {
                setSelectedSurgery({
                  id: "SUR003", patientName: "George Miller", patientId: "PAT011",
                  procedure: "Total Knee Replacement", date: "2026-01-03", time: "13:00",
                  room: "OR-3", status: "prep", badgeClass: "badge-yellow",
                  team: ["Dr. Sophia Anderson", "Dr. Kevin Wong", "Anesthesiologist Dr. Lee", "Surgical Nurse Team C"]
                });
                setIsModalOpen(true);
              }}>View Details</button></td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <SurgeryDetailsModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        surgeryData={selectedSurgery}
      />

      <ScheduleSurgeryModal 
        isOpen={isScheduleModalOpen} 
        onClose={() => setIsScheduleModalOpen(false)} 
      />
    </div>
  );
}

export default SurgerySchedule;
