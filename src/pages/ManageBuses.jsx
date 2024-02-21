import { useState } from "react";
import { Sidebar } from "../components/Sidebar";
import { FilterContainer } from "../components/FilterContainer";
import { LoginDetails } from "../components/LoginDetails";
import { BusDetailsTable } from "../components/Tables/BusDetailsTable";

export default function ManageBuses() {
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
      <BusDetailsTable
        onSetOpen={setIsModelOpen}
        isModelOpen={isModelOpen}
        values={[
          "Bus Number",
          "Bus No. Plate",
          "Driver ID",
          "Route ID",
          "Status",
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
          <img src="images/bus--photo.png" alt="bus" />
          <h2>Manage Buses</h2>
        </div>
        <button className="add-btn " onClick={handleModalOpen}>
          + Add Buses
        </button>
      </div>
      <FilterContainer />
    </div>
  );
}
