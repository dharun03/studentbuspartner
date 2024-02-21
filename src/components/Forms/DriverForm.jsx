import { useState } from "react";

export function DriverForm({
  onSetOpen,
  onAddItem,
  OnDeleteItem,
  defaultValue,
}) {
  const [name, setName] = useState(defaultValue.name ? defaultValue.name : "");
  const [driverId, setDriverId] = useState(
    defaultValue.driverId ? defaultValue.driverId : ""
  );
  const [phone, setPhone] = useState(
    defaultValue.phone ? defaultValue.phone : ""
  );
  const [allocatedBusNo, setAllocatedBusNo] = useState(
    defaultValue.allocatedBusNo ? defaultValue.allocatedBusNo : ""
  );
  const [licenseNo, setLicenseNo] = useState(
    defaultValue.licenseNo ? defaultValue.licenseNo : ""
  );

  function handleClose() {
    onSetOpen(false);
  }

  function handleFormSubmit(e) {
    e.preventDefault();

    const newDriver = { name, driverId, phone, allocatedBusNo, licenseNo };

    onAddItem(newDriver);
    onSetOpen(false);
    setName("");
    setDriverId("");
    setLicenseNo("");
    setPhone("");
    setAllocatedBusNo("");
  }

  return (
    <div className="popup" id="addBusPopup">
      <div className="popup-content">
        <span className="close" onClick={handleClose}>
          &times;
        </span>
        <h2>Add Driver</h2>
        <form onSubmit={handleFormSubmit}>
          <label>DRIVER ID:</label>
          <input
            type="text"
            value={driverId}
            onChange={(e) => setDriverId(e.target.value)}
            required
          />
          <br />
          <label>NAME:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <label>LICENSE NO.:</label>
          <input
            type="text"
            value={licenseNo}
            onChange={(e) => setLicenseNo(e.target.value)}
            required
          />

          <label>PHONE NO.:</label>
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
          <br />
          <label>ALLOCATED BUS NO.</label>
          <input
            type="text"
            value={allocatedBusNo}
            onChange={(e) => setAllocatedBusNo(e.target.value)}
            required
          />

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}
