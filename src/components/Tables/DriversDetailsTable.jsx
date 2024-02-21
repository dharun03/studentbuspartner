import { useState } from "react";
import { DriverForm } from "../Forms/DriverForm";

let driversList = [
  {
    name: "arun",
    driverId: "1234",
    licenseNo: "123456",
    phone: "819712321",
    allocatedBusNo: "32",
  },
];
export function DriversDetailsTable({ onSetOpen, isModelOpen, values }) {
  const [detailsList, setDetailsList] = useState(driversList);

  const [rowToEdit, setRowToEdit] = useState(null);

  function handleAddItem(item) {
    setDetailsList([...detailsList, item]);
  }

  function handleDeleteItem(id) {
    setDetailsList(detailsList.filter((item) => item.driverId !== id));
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
                <DriverTableEntry
                  driverId={item.driverId}
                  name={item.name}
                  licenseNo={item.licenseNo}
                  phone={item.phone}
                  allocatedBusNo={item.allocatedBusNo}
                  onDeleteItem={handleDeleteItem}
                  onEdiItem={handleEditItem}
                />
              ))
            : ""}

          {isModelOpen ? (
            <DriverForm
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

function DriverTableEntry({
  driverId,
  name,
  licenseNo,
  phone,
  allocatedBusNo,
  onDeleteItem,
  onEdiItem,
}) {
  return (
    <tr>
      <td>{driverId}</td>
      <td>{name}</td>
      <td>{licenseNo}</td>
      <td>{phone}</td>
      <td>{allocatedBusNo}</td>
      <td className="action-btn-container">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          onClick={() => onEdiItem(driverId)}
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
          onClick={() => onDeleteItem(driverId)}
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
