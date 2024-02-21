import { useState, useEffect } from "react";

import { db } from "../../config/firebase";
import { getDocs, collection } from "firebase/firestore";

export const ComplaintsList = [];

export function ComplaintsTable({ onSetOpen, isModelOpen, values }) {
  const [detailsList, setDetailsList] = useState(ComplaintsList);

  const dataRef = collection(db, "complaints");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getDocs(dataRef);
        const filteredData = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        console.log({ filteredData });
        setDetailsList(filteredData);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

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
                <ComplaintTableEntry
                  studentId={item.studentid}
                  studentName={item.name}
                  CID={item.cid}
                  description={item.description}
                  title={item.title}
                  routeNo={item.routeno}
                />
              ))
            : ""}
        </tbody>
      </table>
    </div>
  );
}

function ComplaintTableEntry({
  studentId,
  studentName,
  CID,
  description,
  title,
  routeNo,
}) {
  return (
    <tr>
      <td>{studentId}</td>
      <td>{studentName}</td>
      <td>{CID}</td>
      <td>{description}</td>
      <td>{title}</td>
      <td>{routeNo}</td>
    </tr>
  );
}
