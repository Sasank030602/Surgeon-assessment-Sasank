import { LuX, LuMaximize, LuEye, LuFileText } from 'react-icons/lu';
import "../../App.css";

function SurgeryDetailsModal({ isOpen, onClose, surgeryData }) {
  if (!isOpen || !surgeryData) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div>
            <h2 className="modal-title">Surgery Details</h2>
            <div className="modal-subtitle">{surgeryData.id}</div>
          </div>
          <button className="btn-close-modal" onClick={onClose}>
            <LuX size={24} />
          </button>
        </div>

        <div className="modal-body">
          <div className="modal-section-title">Surgery Information</div>
          <div className="grid-2-col">
            <div className="modal-info-box">
              <div className="info-label">Procedure</div>
              <div className="info-value">{surgeryData.procedure}</div>
            </div>
            <div className="modal-info-box">
              <div className="info-label">Status</div>
              <div className="info-value"><span className={`status-badge ${surgeryData.badgeClass}`}>{surgeryData.status}</span></div>
            </div>
            <div className="modal-info-box">
              <div className="info-label">Date & Time</div>
              <div className="info-value">{surgeryData.date} at {surgeryData.time}</div>
            </div>
            <div className="modal-info-box">
              <div className="info-label">OR Room</div>
              <div className="info-value">{surgeryData.room}</div>
            </div>
          </div>

          <div className="modal-section-title">Patient Information</div>
          <div className="modal-info-box">
            <div className="info-value">{surgeryData.patientName}</div>
            <div className="info-label mt-1">{surgeryData.patientId}</div>
          </div>

          <div className="modal-section-title">Surgical Team</div>
          <div className="team-pills">
            {surgeryData.team.map((member, index) => (
              <span key={index} className="team-pill-blue">{member}</span>
            ))}
          </div>

          <div className="modal-section-title">Imaging & Records</div>
          <div className="records-grid">
            <button className="btn-record"><LuMaximize className="mr-2" size={18} /> View CT Scans</button>
            <button className="btn-record"><LuMaximize className="mr-2" size={18} /> View MRI Results</button>
            <button className="btn-record"><LuEye className="mr-2" size={18} /> Pre-op Assessment</button>
            <button className="btn-record"><LuFileText className="mr-2" size={18} /> Lab Reports</button>
          </div>
        </div>

        <div className="modal-footer">
          <button className="btn-edit-surgery">Edit Surgery Details</button>
          <button className="btn-close-action" onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
}

export default SurgeryDetailsModal;
