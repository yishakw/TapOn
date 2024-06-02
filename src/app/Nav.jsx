const Nav = () => {
  return (
    <nav className="navbar justify-between bg-transparent  bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost hover:text-slate-200 hover:backdrop:bg-transparent  text-[13px]">
          Precious
        </a>
      </div>
      <div className="flex-none ">
        <button className="btn btn-square  hover:text-slate-200 hover:backdrop:bg-transparent  btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block w-5 h-5 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1"
              d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
            ></path>
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Nav;
