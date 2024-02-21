import { useState } from "react";

export function RouteForm({
  onSetOpen,
  onAddItem,
  OnDeleteItem,
  defaultValue,
}) {
  const [routeId, setRouteId] = useState(
    defaultValue.routeId ? defaultValue.routeId : ""
  );
  const [routeName, setRouteName] = useState(
    defaultValue.routeName ? defaultValue.routeName : ""
  );
  const [buses, setBuses] = useState(
    defaultValue.buses ? defaultValue.buses : ""
  );
  const [pickupPoints, setPickupPoints] = useState(
    defaultValue.pickupPoints ? defaultValue.pickupPoints : ""
  );
  function handleClose() {
    onSetOpen(false);
  }

  function handleFormSubmit(e) {
    e.preventDefault();

    const newRoute = { routeId, routeName, buses, pickupPoints };

    onAddItem(newRoute);
    onSetOpen(false);
    setRouteName("");
    setRouteId("");
    setBuses("");
    setPickupPoints("");
  }

  return (
    <div className="popup" id="addBusPopup">
      <div className="popup-content">
        <span className="close" onClick={handleClose}>
          &times;
        </span>
        <h2>Add Student</h2>
        <form onSubmit={handleFormSubmit}>
          <label>Route ID:</label>
          <input
            type="text"
            value={routeId}
            onChange={(e) => setRouteId(e.target.value)}
            required
          />
          <br />
          <label>Route Name:</label>
          <input
            type="text"
            value={routeName}
            onChange={(e) => setRouteName(e.target.value)}
            required
          />

          <label>Buses</label>
          <input
            type="text"
            value={buses}
            onChange={(e) => setBuses(e.target.value)}
            required
          />

          <label>Pickup Points:</label>
          <input
            type="text"
            value={pickupPoints}
            onChange={(e) => setPickupPoints(e.target.value)}
            required
          />
          <br />

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}
