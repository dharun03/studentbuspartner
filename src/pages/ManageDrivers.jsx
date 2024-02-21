import { useState } from "react";
import { Sidebar } from "../components/Sidebar";
import { FilterContainer } from "../components/FilterContainer";
import { DriversDetailsTable } from "../components/Tables/DriversDetailsTable";

export default function ManageDrivers() {
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

function LoginDetails() {
  return (
    <header className="login-details">
      <div className="login-details-container">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          className="login-details-icon"
        >
          <g
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          >
            <path d="M0 0h24v24H0z" />
            <path
              fill="currentColor"
              d="M12 2a5 5 0 1 1-5 5l.005-.217A5 5 0 0 1 12 2zm2 12a5 5 0 0 1 5 5v1a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-1a5 5 0 0 1 5-5h4z"
            />
          </g>
        </svg>
        <div className="login-details-text">
          <div className="name">Name</div>
          <div className="login-mail">Login Mail</div>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          className="login-details-icon"
        >
          <path fill="currentColor" d="m7 10l5 5l5-5z" />
        </svg>
      </div>
    </header>
  );
}

function BusDetails() {
  const [isModelOpen, setIsModelOpen] = useState(false);
  const [detailsList, setDetailsList] = useState(null);
  return (
    <div className="details-container">
      <InputOptions onSetOpen={setIsModelOpen} isModelOpen={isModelOpen} />
      <DriversDetailsTable
        onSetOpen={setIsModelOpen}
        isModelOpen={isModelOpen}
        detailsList={detailsList}
        setDetailsList={setDetailsList}
        values={[
          "Driver ID",
          "Name",
          "License No",
          "Phone No",
          "Allocated Bus No",
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
          <img src="images/ManageDrivers--photo.png" alt="driver" />
          <h2>Manage Drivers</h2>
        </div>
        <button className="add-btn " onClick={handleModalOpen}>
          + Add Drivers
        </button>
      </div>
      <FilterContainer />
    </div>
  );
}
