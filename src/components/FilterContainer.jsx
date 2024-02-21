import { useState } from "react";

export function FilterContainer() {
  const [search, setSearch] = useState("");
  return (
    <div className="filter-container">
      <div className="filter-options">
        <button className="filter-btn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M2.57 3h18.86l-6.93 9.817V21h-5v-8.183L2.57 3Zm3.86 2l5.07 7.183V19h1v-6.817L17.57 5H6.43Z"
            />
          </svg>
          Filter
        </button>
      </div>
      <div className="search-box">
        <input
          type="text"
          placeholder="Search..."
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
    </div>
  );
}
