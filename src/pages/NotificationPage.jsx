import { useState } from "react";
import { Sidebar } from "../components/Sidebar";
import { FilterContainer } from "../components/FilterContainer";
import { LoginDetails } from "../components/LoginDetails";
import { NotificationDetailsTable } from "../components/Tables/NotificationTable";
export default function NotificationPage() {
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
      <NotificationDetails />
    </div>
  );
}

function NotificationDetails() {
  const [isModelOpen, setIsModelOpen] = useState(false);
  return (
    <div className="details-container">
      <InputOptions onSetOpen={setIsModelOpen} isModelOpen={isModelOpen} />
      <NotificationDetailsTable
        onSetOpen={setIsModelOpen}
        isModelOpen={isModelOpen}
        values={["S.no", "Title", "Description", "Date", "Time", "Actions"]}
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
          <h2>Manage Notifcations</h2>
        </div>
        <button className="add-btn " onClick={handleModalOpen}>
          + Add Notifcation
        </button>
      </div>
      <FilterContainer />
    </div>
  );
}
