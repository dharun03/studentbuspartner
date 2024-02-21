import { useState } from "react";
import { Sidebar } from "../components/Sidebar";
import { FilterContainer } from "../components/FilterContainer";
import { StudentsDetailsTable } from "../components/Tables/StudentsDetailsTable";
import { LoginDetails } from "../components/LoginDetails";

export default function ManageStudents() {
  return <DashboardContainer />;
}

function DashboardContainer() {
  return (
    <div className="app-container">
      <Sidebar />
      <Main />
    </div>
  );
}

function Main() {
  return (
    <div className="main-content">
      <LoginDetails />
      <BusDetails />
    </div>
  );
}

function BusDetails() {
  const [isModelOpen, setIsModelOpen] = useState(false);
  return (
    <div className="details-container">
      <InputOptions onSetOpen={setIsModelOpen} isModelOpen={isModelOpen} />
      <StudentsDetailsTable
        onSetOpen={setIsModelOpen}
        isModelOpen={isModelOpen}
        values={[
          "Student ID",
          "Name",
          " Mail ID",
          "Phone Number",
          "Pickup Point",
          "Actions",
        ]}
      />
    </div>
  );
}

function InputOptions({ onSetOpen, isModelOpen }) {
  function handleModalOpen() {
    onSetOpen(true);
  }

  return (
    <div className="input-options">
      <div className="input-header">
        <div className="input-header-logo">
          <img src="images/ManageStudents--photo.jpeg" alt="driver" />
          <h2>Manage Students</h2>
        </div>
        <button className="add-btn " onClick={handleModalOpen}>
          + Add Students
        </button>
      </div>
      <FilterContainer />
    </div>
  );
}
