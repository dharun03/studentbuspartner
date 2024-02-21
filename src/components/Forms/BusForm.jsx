import { useState } from "react";

export function BusForm({ onSetOpen, onAddItem, OnDeleteItem, defaultValue }) {
  const [busId, setBusId] = useState(
    defaultValue.busId ? defaultValue.busId : ""
  );
  const [busNo, setBusNo] = useState(
    defaultValue.busNo ? defaultValue.busNo : ""
  );
  const [driverId, setDriverId] = useState(
    defaultValue.driverId ? defaultValue.driverId : ""
  );
  const [routeId, setRouteId] = useState(
    defaultValue.routeId ? defaultValue.routeId : ""
  );
  const [status, setStatus] = useState(
    defaultValue.status ? defaultValue.status : "active"
  );

  function handleClose() {
    onSetOpen(false);
  }

  function handleFormSubmit(e) {
    e.preventDefault();

    const newBus = { busId, busNo, driverId, routeId, status };

    onAddItem(newBus);
    onSetOpen(false);
    setBusId("");
    setBusNo("");
    setRouteId("");
    setStatus("Active");
    setDriverId("");
  }

  return (
    <div className="popup" id="addBusPopup">
      <div className="popup-content">
        <span className="close" onClick={handleClose}>
          &times;
        </span>
        <h2>Add Bus</h2>
        <form onSubmit={handleFormSubmit}>
          <label>Bus ID:</label>
          <input
            type="text"
            value={busId}
            onChange={(e) => setBusId(e.target.value)}
            required
          />
          <br />
          <label>Bus No.</label>
          <input
            type="text"
            value={busNo}
            onChange={(e) => setBusNo(e.target.value)}
            required
          />

          <label>Route Id/label</label>
          <input
            type="text"
            value={routeId}
            onChange={(e) => setRouteId(e.target.value)}
            required
          />

          <label>Driver ID</label>
          <input
            type="text"
            value={driverId}
            onChange={(e) => setDriverId(e.target.value)}
            required
          />
          <br />
          <label>Status</label>

          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="select"
          >
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>
          <br />

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}
