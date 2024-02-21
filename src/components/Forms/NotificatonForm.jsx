import { useState } from "react";
import { db } from "../../config/firebase";
import { getDocs, collection, addDoc } from "firebase/firestore";

export function NotificationForm({
  onSetOpen,
  onAddItem,
  OnDeleteItem,
  defaultValue,
  sno,
}) {
  const [title, setTitle] = useState(
    defaultValue.title ? defaultValue.title : ""
  );
  const [description, setDescription] = useState(
    defaultValue.description ? defaultValue.description : ""
  );
  const [time, setTime] = useState(defaultValue.time ? defaultValue.time : "");
  const [date, setDate] = useState(defaultValue.date ? defaultValue.date : "");

  const dataRef = collection(db, "notifications");

  function handleClose() {
    onSetOpen(false);
  }

  async function handleFormSubmit(e) {
    e.preventDefault();

    const newNotification = { sno, title, description, time, date };

    onAddItem(newNotification);
    try {
      await addDoc(dataRef, newNotification);
    } catch (err) {
      console.log(err);
    }

    onAddItem(newNotification);
    onSetOpen(false);
    setTitle("");
    setDescription("");
    setTime("");
    setDate("");
  }

  return (
    <div className="popup" id="addBusPopup">
      <div className="popup-content">
        <span className="close" onClick={handleClose}>
          &times;
        </span>
        <h2>Add Notifcation</h2>
        <form onSubmit={handleFormSubmit}>
          <label>Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <br />
          <label>Description</label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />

          <label>Time</label>
          <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
          />

          <label>Date</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}
