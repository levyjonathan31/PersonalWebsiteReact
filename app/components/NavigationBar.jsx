"use client";
import Link from "next/link";

function NavigationBar({ title, firstOption, secondOption, thirdOption }) {
  return (
    <div className="navbar bg-slate-800/80 backdrop-blur-lg border-b border-blue-400/30 shadow-lg shadow-blue-400/10 sticky top-0 z-[9998]">
      <div className="navbar-start">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle text-white hover:bg-blue-500/20 hover:border-blue-400/50 transition-all duration-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[9999] p-2 shadow-xl bg-slate-800/95 backdrop-blur-lg rounded-box w-52 border border-blue-400/30 absolute left-0 top-full"
          >
            <li>
              <a href={`#${firstOption}`} className="text-slate-200 hover:text-blue-400 hover:bg-blue-500/20 transition-all duration-300 rounded-lg">
                {firstOption}
              </a>
            </li>
            <li>
              <a href={`#${secondOption}`} className="text-slate-200 hover:text-blue-400 hover:bg-blue-500/20 transition-all duration-300 rounded-lg">
                {secondOption}
              </a>
            </li>
            <li>
              <a href={`#${thirdOption}`} className="text-slate-200 hover:text-blue-400 hover:bg-blue-500/20 transition-all duration-300 rounded-lg">
                {thirdOption}
              </a>
            </li>
            <li>
              <a href="#Contact" className="text-slate-200 hover:text-blue-400 hover:bg-blue-500/20 transition-all duration-300 rounded-lg">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex navbar-center">
        <Link
          href="/"
          className="btn btn-ghost normal-case text-xl lg:text-4xl text-white hover:text-blue-400 hover:bg-blue-500/20 transition-all duration-300 font-bold tracking-wide"
        >
          <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            {title}
          </span>
        </Link>
      </div>
      <div className="navbar-end flex gap-2">
        <a
          className="btn btn-ghost btn-circle text-white hover:bg-blue-500/20 hover:border-blue-400/50 hover:text-blue-400 transition-all duration-300 hover:scale-110"
          href="https://www.linkedin.com/in/levyjonathan31/"
          aria-label="LinkedIn Profile"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className="h-5 w-5 lg:h-7 lg:w-7"
            fill="currentColor"
          >
            <path
              d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
            />
          </svg>
        </a>
        <a
          className="btn btn-ghost btn-circle text-white hover:bg-blue-500/20 hover:border-blue-400/50 hover:text-blue-400 transition-all duration-300 hover:scale-110"
          href="https://github.com/levyjonathan31"
          aria-label="GitHub Profile"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 lg:h-7 lg:w-7"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
            />
          </svg>
        </a>
        <a 
          className="btn btn-ghost btn-circle text-white hover:bg-blue-500/20 hover:border-blue-400/50 hover:text-blue-400 transition-all duration-300 hover:scale-110" 
          href="/resume.pdf"
          aria-label="Download Resume"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 lg:h-7 lg:w-7"
            fill="currentColor"
            viewBox="0 0 42 42"
          >
            <path
              d="M34.395,0H9.522c-2.762,0-5,2.239-5,5v33.916c0,2.761,2.238,5,5,5h24.871c2.762,0,5-2.239,5-5V5   C39.395,2.239,37.154,0,34.395,0z M9.208,16.855c0-1.172,0.951-2.121,2.121-2.121h0.742c-0.791-0.874-1.277-2.03-1.277-3.304   c0-2.723,2.209-4.931,4.932-4.931c2.725,0,4.932,2.207,4.932,4.932c0,1.272-0.486,2.429-1.279,3.303h0.709   c1.172,0,2.121,0.949,2.121,2.121v3.578c0,1.122-0.875,2.03-1.975,2.106h-9.051c-1.1-0.076-1.975-0.984-1.975-2.106V16.855   L9.208,16.855z M32.708,37.416h-21.5c-1.104,0-2-0.896-2-2s0.896-2,2-2h21.5c1.104,0,2,0.896,2,2S33.812,37.416,32.708,37.416z    M32.708,29.916h-21.5c-1.104,0-2-0.896-2-2s0.896-2,2-2h21.5c1.104,0,2,0.896,2,2S33.812,29.916,32.708,29.916z M32.708,22.416   h-6.5c-1.104,0-2-0.896-2-2c0-1.104,0.896-2,2-2h6.5c1.104,0,2,0.896,2,2C34.708,21.52,33.812,22.416,32.708,22.416z"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}

export { NavigationBar };
