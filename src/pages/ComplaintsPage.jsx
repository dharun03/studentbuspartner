import { useState } from "react";
import { Sidebar } from "../components/Sidebar";
import { FilterContainer } from "../components/FilterContainer";
import { LoginDetails } from "../components/LoginDetails";
import { ComplaintsTable } from "../components/Tables/ComplaintsTable";
export default function ComplaintsPage() {
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
      <ComplaintsTable
        onSetOpen={setIsModelOpen}
        isModelOpen={isModelOpen}
        values={[
          "Student ID",
          "Student Name",
          "CID",
          "Description",
          "Title",
          "Route No",
        ]}
      />
    </div>
  );
}

function InputOptions({ onSetOpen, isModelOpen }) {
  return (
    <div className="input-options">
      <div className="input-header">
        <div className="input-header-logo">
          <img src="images/bus--photo.png" alt="bus" />
          <h2>Manage Complaints</h2>
        </div>
      </div>
      <FilterContainer />
    </div>
  );
}
