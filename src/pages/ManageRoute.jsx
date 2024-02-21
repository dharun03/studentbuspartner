import { useState } from "react";
import { Sidebar } from "../components/Sidebar";
import { FilterContainer } from "../components/FilterContainer";
import { LoginDetails } from "../components/LoginDetails";
import { RouteDetails } from "../components/Tables/RouteTable";
export default function ManageRoute() {
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
      <RouteDetails
        onSetOpen={setIsModelOpen}
        isModelOpen={isModelOpen}
        values={["Route ID", "Route Name", "Buses", "Pickup Points", "Actions"]}
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
          <img src="images/ManageRoute--photo.jpeg" alt="route" />
          <h2>Manage Routes</h2>
        </div>
        <button className="add-btn " onClick={handleModalOpen}>
          + Add Routes
        </button>
      </div>
      <FilterContainer />
    </div>
  );
}
