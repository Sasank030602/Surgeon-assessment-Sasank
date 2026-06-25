import { LuX } from 'react-icons/lu';
import { FiCheckCircle } from 'react-icons/fi';
import "../../App.css";

function ScheduleSurgeryModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="schedule-modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2 className="modal-title">Schedule New Surgery</h2>
          <button className="btn-close-modal" onClick={onClose}>
            <LuX size={24} />
          </button>
        </div>

        <div className="modal-body">
          <div className="form-row-2">
            <div className="form-group-no-margin">
              <label className="form-label">Patient *</label>
              <input type="text" className="form-input" placeholder="Search patient..." />
            </div>
            <div className="form-group-no-margin">
              <label className="form-label">Surgery Type *</label>
              <input type="text" className="form-input" />
            </div>
          </div>

          <div className="form-row-3">
            <div className="form-group-no-margin">
              <label className="form-label">Surgery Date *</label>
              <input type="date" className="form-input" />
            </div>
            <div className="form-group-no-margin">
              <label className="form-label">Start Time *</label>
              <input type="time" className="form-input" />
            </div>
            <div className="form-group-no-margin">
              <label className="form-label">Duration (hours) *</label>
              <input type="number" className="form-input" defaultValue="2" min="1" />
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">OR Room *</label>
            <input type="text" className="form-input" />
          </div>

          <div className="section-label">Surgical Team</div>
          <div className="team-inputs">
            <input type="text" className="form-input" placeholder="Anesthesiologist" />
            <input type="text" className="form-input" placeholder="Assistant Surgeon" />
            <input type="text" className="form-input" placeholder="Scrub Nurse" />
          </div>

          <div className="form-group">
            <label className="form-label">Pre-operative Notes</label>
            <textarea 
              className="form-input form-textarea" 
              placeholder="Patient preparation, special requirements..."
            ></textarea>
          </div>

          <div className="equipment-check-box">
            <div className="equipment-title">Equipment & Resources Check</div>
            <div className="equipment-items">
              <div className="equipment-item">All equipment available</div>
              <div className="equipment-item">Blood units reserved</div>
            </div>
          </div>
        </div>

        <div className="modal-footer">
          <button className="btn-schedule-wide">
            <FiCheckCircle size={18} /> Schedule Surgery
          </button>
          <button className="btn-cancel" onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
}

export default ScheduleSurgeryModal;
