export function LoginDetails() {
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
