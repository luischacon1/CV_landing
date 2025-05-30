import "./shimmer-resume.css";

const Pinned = () => {
  return (
    <section className="py-6">
      {/* Search Bar */}
      <div className="mb-8">
        <div className="bg-lsecondary text-txt rounded-lg h-12 px-4 py-3 flex gap-3 text-base items-center">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#A7A7A6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8"/>
            <path d="m21 21-4.35-4.35"/>
          </svg>
          <input
            type="text"
            placeholder="Search"
            className="bg-lsecondary w-full outline-none transition-transform duration-200 ease-in-out focus:scale-105 text-base"
          />
        </div>
      </div>

      {/* Social Links */}
      <div className="flex gap-8 justify-center">
        {/* GitHub */}
        <div className="flex flex-col gap-3 items-center">
          <a
            href="https://github.com/luischacon1"
            target="_blank"
            className="flex justify-center items-center bg-lsecondary w-16 h-16 p-3 rounded-full \
            transition-all duration-300 ease-in-out transform hover:scale-110 hover:rotate-6 hover:bg-iblue"
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
          <h3 className="text-sm text-txt font-medium">GitHub</h3>
        </div>

        {/* LinkedIn */}
        <div className="flex flex-col gap-3 items-center">
          <a
            href="https://linkedin.com/in/luisfernandezchacon"
            target="_blank"
            className="flex justify-center items-center bg-lsecondary w-16 h-16 p-3 rounded-full \
            transition-all duration-300 ease-in-out transform hover:scale-110 hover:rotate-6 hover:bg-iblue"
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
          <h3 className="text-sm text-txt font-medium">LinkedIn</h3>
        </div>

        {/* X (Twitter) */}
        <div className="flex flex-col gap-3 items-center">
          <a
            href="https://x.com/Luis_fchacon"
            target="_blank"
            className="flex justify-center items-center bg-lsecondary w-16 h-16 p-3 rounded-full \
            transition-all duration-300 ease-in-out transform hover:scale-110 hover:rotate-6 hover:bg-iblue"
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
          </a>
          <h3 className="text-sm text-txt font-medium">X</h3>
        </div>

        {/* YouTube */}
        <div className="flex flex-col gap-3 items-center">
          <a
            href="https://www.youtube.com/watch?v=mUqx8NFBc54&list=PLpTZ1Ji32zWkJ-C4WBSZ5aK9siBUkgi9c&index=13"
            target="_blank"
            className="flex justify-center items-center bg-lsecondary w-16 h-16 p-3 rounded-full \
            transition-all duration-300 ease-in-out transform hover:scale-110 hover:rotate-6 hover:bg-iblue"
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
          </a>
          <h3 className="text-sm text-txt font-medium">YouTube</h3>
        </div>

        {/* Resume */}
        <div className="flex flex-col gap-3 items-center">
          <a
            href="/portfolio/luis/CV_luis_fernandez.pdf"
            download="CV_luis_fernandez.pdf"
            className="flex justify-center items-center bg-gray-500 w-16 h-16 p-3 rounded-full shimmer-resume \
            transition-all duration-300 ease-in-out transform hover:scale-110 hover:rotate-6"
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
              <polyline points="14,2 14,8 20,8"/>
              <line x1="16" y1="13" x2="8" y2="13"/>
              <line x1="16" y1="17" x2="8" y2="17"/>
              <polyline points="10,9 9,9 8,9"/>
            </svg>
          </a>
          <h3 className="text-sm text-txt font-medium">Resume</h3>
        </div>
      </div>
    </section>
  );
};

export default Pinned;
