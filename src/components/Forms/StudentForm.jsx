import { useState } from "react";
import { db } from "../../config/firebase";
import { collection, addDoc } from "firebase/firestore";

export function StudentForm({
  onSetOpen,
  onAddItem,
  getList,
  OnDeleteItem,
  defaultValue,
}) {
  const [name, setName] = useState(defaultValue.name ? defaultValue.name : "");
  const [studentid, setStudentId] = useState(
    defaultValue.studentId ? defaultValue.studentId : ""
  );
  const [phonenumber, setPhone] = useState(
    defaultValue.phonenumber ? defaultValue.phonenumber : ""
  );
  const [mailid, setMailId] = useState(
    defaultValue.mailID ? defaultValue.mailID : ""
  );
  const [pickuppoint, setPickupPoint] = useState(
    defaultValue.pickupPoint ? defaultValue.pickupPoint : ""
  );

  const dataRef = collection(db, "users");

  function handleClose() {
    onSetOpen(false);
  }

  async function handleFormSubmit(e) {
    e.preventDefault();

    const newStudnet = { name, studentid, phonenumber, pickuppoint, mailid };

    onAddItem(newStudnet);
    try {
      await addDoc(dataRef, newStudnet);
    } catch (err) {
      console.log(err);
    }
    onSetOpen(false);
    setName("");
    setStudentId("");
    setPickupPoint("");
    setPhone("");
    setMailId("");
  }

  return (
    <div className="popup" id="addBusPopup">
      <div className="popup-content">
        <span className="close" onClick={handleClose}>
          &times;
        </span>
        <h2>Add Student</h2>
        <form onSubmit={handleFormSubmit}>
          <label>STUDENT ID:</label>
          <input
            type="text"
            value={studentid}
            onChange={(e) => setStudentId(e.target.value)}
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

          <label>MAIL ID</label>
          <input
            type="text"
            value={mailid}
            onChange={(e) => setMailId(e.target.value)}
            required
          />

          <label>PHONE NO :</label>
          <input
            type="text"
            value={phonenumber}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
          <br />
          <label>PICKUP POINT</label>
          <input
            type="text"
            value={pickuppoint}
            onChange={(e) => setPickupPoint(e.target.value)}
            required
          />

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}
