import { useState, useEffect } from "react";
import { NotificationForm } from "../Forms/NotificatonForm";
import { db } from "../../config/firebase";
import { getDocs, collection, addDoc } from "firebase/firestore";

let NotifcationList = [];
export function NotificationDetailsTable({ onSetOpen, isModelOpen, values }) {
  const [detailsList, setDetailsList] = useState(NotifcationList);

  const [sno, setno] = useState(0);

  const [rowToEdit, setRowToEdit] = useState(null);

  const dataRef = collection(db, "notifications");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getDocs(dataRef);
        const filteredData = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
          sno: setno(sno + 1),
        }));
        console.log({ filteredData });
        setDetailsList(filteredData);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  function handleAddItem(item) {
    setDetailsList([...detailsList, item]);
    setno(sno + 1);
  }

  function handleDeleteItem(id) {
    setDetailsList(detailsList.filter((item) => item.sno !== id));
  }

  function handleEditItem(id) {
    onSetOpen(true);
    setRowToEdit(id);
  }

  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            {values.map((header) => (
              <th>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {detailsList
            ? detailsList.map((item) => (
                <NotificationTableEntry
                  sno={sno}
                  title={item.title}
                  description={item.description}
                  date={item.date}
                  time={item.time}
                  onDeleteItem={handleDeleteItem}
                  onEdiItem={handleEditItem}
                />
              ))
            : ""}

          {isModelOpen ? (
            <NotificationForm
              sno={sno}
              onSetOpen={onSetOpen}
              onAddItem={handleAddItem}
              onDeleteItem={handleDeleteItem}
              defaultValue={rowToEdit !== null && detailsList[rowToEdit]}
            />
          ) : (
            ""
          )}
        </tbody>
      </table>
    </div>
  );
}

function NotificationTableEntry({
  sno,
  title,
  description,
  date,
  time,
  onEdiItem,
  onDeleteItem,
}) {
  return (
    <tr>
      <td>{sno}</td>
      <td>{title}</td>
      <td>{description}</td>
      <td>{date}</td>
      <td>{time}</td>
      <td className="action-btn-container">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          onClick={() => onEdiItem(sno)}
        >
          <path
            fill="currentColor"
            d="m18.988 2.012l3 3L19.701 7.3l-3-3zM8 16h3l7.287-7.287l-3-3L8 13z"
          />
          <path
            fill="currentColor"
            d="M19 19H8.158c-.026 0-.053.01-.079.01c-.033 0-.066-.009-.1-.01H5V5h6.847l2-2H5c-1.103 0-2 .896-2 2v14c0 1.104.897 2 2 2h14a2 2 0 0 0 2-2v-8.668l-2 2V19z"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          onClick={() => onDeleteItem(sno)}
        >
          <path
            fill="#e03131"
            d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v10zM18 4h-2.5l-.71-.71c-.18-.18-.44-.29-.7-.29H9.91c-.26 0-.52.11-.7.29L8.5 4H6c-.55 0-1 .45-1 1s.45 1 1 1h12c.55 0 1-.45 1-1s-.45-1-1-1z"
          />
        </svg>
      </td>
    </tr>
  );
}
