import { Sidebar } from "../components/Sidebar";
import { LoginDetails } from "../components/LoginDetails";
import "../index.css";
import { ComplaintsList } from "../components/Tables/ComplaintsTable";
import { BarChart } from "../components/Charts/BarChart";
import { PieChart } from "../components/Charts/PieChart";
import { Data } from "../Data";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { collection, getCountFromServer } from "firebase/firestore";
import { db } from "../config/firebase.js";
import Loader from "../components/Loader";
export function Dashboard() {
  return (
    <div className="app-container">
      <Sidebar />
      <Main />
    </div>
  );
}

let count = {
  studCount: 0,
  busCount: 0,
  driverCount: 0,
  routeCount: 0,
  queriesCount: 0,
};

function Main() {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchCount() {
      try {
        setIsLoading(true);
        const studData = collection(db, "users");
        const sc = await getCountFromServer(studData);
        count.studCount = sc.data().count;
        const busData = collection(db, "buses");
        const bc = await getCountFromServer(busData);
        count.busCount = bc.data().count;
        const driverData = collection(db, "drivers");
        const dc = await getCountFromServer(driverData);
        count.driverCount = dc.data().count;
        const routeData = collection(db, "routes");
        const rc = await getCountFromServer(routeData);
        count.routeCount = rc.data().count;
        const queryData = collection(db, "complaints");
        const qc = await getCountFromServer(queryData);
        count.queriesCount = qc.data().count;
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    }

    fetchCount();
  }, []);

  const [userData, setUserData] = useState({
    labels: Data.map((user) => user.clgName),
    datasets: [
      {
        label: "No. of Students",
        data: Data.map((user) => user.strength),
        backgroundColor: ["blue", "green", "red", "darkblue"],
        barThickness: 8,
        borderRadius: 50,
      },
    ],
  });

  const [pieUserData, setPieUserData] = useState({
    labels: Data.map((user) => user.clgName),
    datasets: [
      {
        label: "No. of Students",
        data: Data.map((user) => user.strength),
        backgroundColor: ["blue", "green", "red", "darkblue"],
      },
    ],
  });

  if (isLoading) return <Loader />;
  return (
    <div className="main-content">
      {/* <LoginDetails /> */}
      <h2 className="title">
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M13 9V3h8v6zM3 13V3h8v10zm10 8V11h8v10zM3 21v-6h8v6zm2-10h4V5H5zm10 8h4v-6h-4zm0-12h4V5h-4zM5 19h4v-2H5zm4-2"
            />
          </svg>
        </span>
        Dashboard
      </h2>
      <CardContainer />
      <div className="chart-container">
        <div className="chart">
          <BarChart chartData={userData} />
        </div>
        <div className="pie-chart">
          <PieChart chartData={pieUserData} />
        </div>
      </div>
    </div>
  );
}

function CardContainer() {
  return (
    <div className="card-container">
      <NavLink to="/manageStudents">
        <Card Heading="Students" Count={count.studCount}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            color="white"
            viewBox="0 0 16 16"
          >
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M14.25 9.25V6L8 2.75L1.75 6L8 9.25l3.25-1.5v3.5c0 1-1.5 2-3.25 2s-3.25-1-3.25-2v-3.5"
            />
          </svg>
        </Card>
      </NavLink>
      <NavLink to="/manageBuses">
        <Card Heading="Buses" Count={count.busCount} bgColor="#d6336c">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            color="white"
            viewBox="0 0 24 24"
          >
            <g
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            >
              <path d="M8 6v6m7-6v6M2 12h19.6M18 18h3s.5-1.7.8-2.8c.1-.4.2-.8.2-1.2c0-.4-.1-.8-.2-1.2l-1.4-5C20.1 6.8 19.1 6 18 6H4a2 2 0 0 0-2 2v10h3" />
              <circle cx="7" cy="18" r="2" />
              <path d="M9 18h5" />
              <circle cx="16" cy="18" r="2" />
            </g>
          </svg>
        </Card>
      </NavLink>
      <NavLink to="/manageRoutes">
        <Card Heading="Routes" Count={count.routeCount} bgColor="#fd7e14">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            color="white"
            viewBox="0 0 24 24"
          >
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 19a2 2 0 1 0 4 0a2 2 0 0 0-4 0M19 7a2 2 0 1 0 0-4a2 2 0 0 0 0 4m-8 12h5.5a3.5 3.5 0 0 0 0-7h-8a3.5 3.5 0 0 1 0-7H13"
            />
          </svg>
        </Card>
      </NavLink>
      <NavLink to="/manageDrivers">
        <Card Heading="Drivers" Count={count.driverCount} bgColor="#212529">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            color="white"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M12 12q-1.65 0-2.825-1.175T8 8q0-1.65 1.175-2.825T12 4q1.65 0 2.825 1.175T16 8q0 1.65-1.175 2.825T12 12m-8 8v-2.8q0-.85.438-1.562T5.6 14.55q1.55-.775 3.15-1.162T12 13q1.65 0 3.25.388t3.15 1.162q.725.375 1.163 1.088T20 17.2V20z"
            />
          </svg>
        </Card>
      </NavLink>
      <NavLink to="/manageComplaints">
        <Card Heading="Queries" Count={count.queriesCount} bgColor="#40c057">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            color="white"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M2 6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2h-4.586l-2.707 2.707a1 1 0 0 1-1.414 0L8.586 19H4a2 2 0 0 1-2-2zm18 0H4v11h5a1 1 0 0 1 .707.293L12 19.586l2.293-2.293A1 1 0 0 1 15 17h5zM6 9.5a1 1 0 0 1 1-1h10a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1m0 4a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1"
            />
          </svg>
        </Card>
      </NavLink>
    </div>
  );
}

function Card({ Heading, Count, children, bgColor }) {
  return (
    <div className="card">
      <div className="icon-box" style={{ backgroundColor: bgColor }}>
        {children}
      </div>
      <div className="card-content">
        <h2>{Heading}</h2>
        <p>{Count}</p>
      </div>
    </div>
  );
}
