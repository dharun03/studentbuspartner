import { useEffect, useState } from "react";
import { StudentForm } from "../Forms/StudentForm";
import { db } from "../../config/firebase";
import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";
import Loader from "../Loader";

const StudentList = [];

export function StudentsDetailsTable({ onSetOpen, isModelOpen, values }) {
  const [detailsList, setDetailsList] = useState(StudentList);
  const [rowToEdit, setRowToEdit] = useState(null);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const dataRef = collection(db, "users");

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const data = await getDocs(dataRef);
        const filteredData = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        console.log({ filteredData });
        setDetailsList(filteredData);
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  function handleAddItem(item) {
    setDetailsList([...detailsList, item]);
  }

  async function handleDeleteItem(id) {
    const deleteItem = doc(db, "users", id);
    await deleteDoc(deleteItem);
    console.log(id);
    setDetailsList([...detailsList.filter((item) => item.studentid !== id)]);
  }

  function handleEditItem(id) {
    onSetOpen(true);
    setRowToEdit(id);
  }

  if (isLoading) return <Loader />;

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
                <StudentTableEntry
                  name={item.name}
                  studentid={item.studentid}
                  mailid={item.mailid}
                  phonenumber={item.phonenumber}
                  pickuppoint={item.pickuppoint}
                  onDeleteItem={handleDeleteItem}
                  onEdiItem={handleEditItem}
                  isSetDeleteOpen={deleteModalOpen}
                  onSetDeleteOpen={setDeleteModalOpen}
                />
              ))
            : ""}

          {isModelOpen ? (
            <StudentForm
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

function StudentTableEntry({
  studentid,
  name,
  mailid,
  phonenumber,
  pickuppoint,
  isSetDeleteOpen,
  onSetDeleteOpen,
  onDeleteItem,
  onEdiItem,
}) {
  return (
    <tr>
      <td>{studentid}</td>
      <td>{name}</td>
      <td>{mailid}</td>
      <td>{phonenumber}</td>
      <td>{pickuppoint}</td>

      {/* {isSetDeleteOpen ? <DeletePopup onSetDeleteOpen={onSetDeleteOpen} /> : ""} */}

      <td className="action-btn-container">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          style={{ cursor: "pointer" }}
          onClick={() => onEdiItem(studentid)}
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
          style={{ cursor: "pointer" }}
          onClick={() => onDeleteItem(studentid)}
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

// function DeletePopup(onSetDeleteOpen) {
//   return (
//     <div className="popup" id="addBusPopup">
//       <div className="popup-content">
//         <span className="close" onClick={() => onSetDeleteOpen(false)}>
//           &times;
//         </span>
//         <h2>Add Student</h2>
//       </div>
//     </div>
//   );
// }
