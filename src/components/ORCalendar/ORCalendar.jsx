import "../../App.css"

function ORCalendar() {
  const days = [
    { day: 1, disabled: true },
    { day: 2, disabled: true },
    { day: 3, active: true },
    { day: 4, active: true },
    ...Array.from({ length: 27 }, (_, i) => ({ day: i + 5 }))
  ];

  return (
    <div className="or-calendar-container">
      <div className="mb-4">
        <h2 className="calendar-title">OR Calendar</h2>
        <div className="calendar-subtitle">Operating room availability and scheduling</div>
      </div>

      <div className="calendar-content-grid col-md-12">
        
        <div className="calendar-main-card bg-white">
          <h3 className="calendar-card-title">OR Availability - January 2026</h3>
          
          <div className="calendar-grid">
            
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
              <div key={day} className="calendar-day-header">{day}</div>
            ))}
            
            
            {days.map((d, index) => (
              <div 
                key={index} 
                className={`calendar-date-cell ${d.disabled ? 'disabled' : ''} ${d.active ? 'active-orange' : ''}`}
              >
                <span className="date-number">{d.day}</span>
                {d.active && <span className="date-dot"></span>}
              </div>
            ))}
          </div>
        </div>

        
        <div className="calendar-side-card">
          <h3 className="calendar-card-title">OR Rooms</h3>
          
          <div className="or-room-list">
            <div className="or-room-item or-room-green">
              <div className="or-room-header">
                <span className="or-dot dot-green"></span>
                <span className="or-name">OR-1</span>
              </div>
              <div className="or-status">Available</div>
            </div>

            <div className="or-room-item or-room-orange">
              <div className="or-room-header">
                <span className="or-dot dot-orange"></span>
                <span className="or-name">OR-2</span>
              </div>
              <div className="or-status">In Use</div>
            </div>

            <div className="or-room-item or-room-yellow">
              <div className="or-room-header">
                <span className="or-dot dot-yellow"></span>
                <span className="or-name">OR-3</span>
              </div>
              <div className="or-status">Prep</div>
            </div>

            <div className="or-room-item or-room-gray">
              <div className="or-room-header">
                <span className="or-dot dot-gray"></span>
                <span className="or-name">OR-4</span>
              </div>
              <div className="or-status">Maintenance</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ORCalendar;
