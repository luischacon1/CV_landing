import Page from "./PageMobile";
import Pinned from "./PinnedMobile";
import ControlButtons from "./ControlButtons";
import { useContext, useState } from "react";
import { AppContext } from "./AppContext";

const SidebarMobile = () => {
  const { setPageOpen, setMenuOpen, menuOpen, pageOpen } = useContext(AppContext);

  const handlePageSelect = (page) => {
    setPageOpen(page);
    setMenuOpen(false); // Close sidebar when a page is selected
  };

  return (
    <section className="h-screen bg-secondary rounded-tl-2xl rounded-bl-2xl overflow-y-auto transform transition-all duration-300 ease-out animate-in slide-in-from-left">
      <div className="px-6 pt-4 flex justify-center items-center flex-row gap-4 h-20">
        <button 
          onClick={() => setMenuOpen(!menuOpen)}
          className="transition-all duration-200 active:scale-95"
        >
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15,18 9,12 15,6"/>
          </svg>
        </button>
        {/* Search Bar */}
        <div className="h-10 w-full bg-lsecondary text-txt rounded-lg p-2 flex gap-2 text-md items-center transition-all duration-200">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#A7A7A6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8"/>
            <path d="m21 21-4.35-4.35"/>
          </svg>
          <h1 className="bg-lsecondary w-full text-sm">
            Welcome to Luis Chacon's Portfolio!
          </h1>
        </div>
      </div>

      <div>
        <Pinned />
      </div>

      {/* ALL THE PAGES */}
      <div className="space-y-1">
        <button 
          onClick={() => handlePageSelect("home")} 
          className="w-full transition-all duration-200 transform active:scale-[0.98]"
        >
          <Page isSelected={pageOpen === "home"} />
        </button>

        <button 
          onClick={() => handlePageSelect("about")} 
          className="w-full transition-all duration-200 transform active:scale-[0.98]"
        >
          <Page
            title="About"
            tagline="Learn more about me and my journey"
            type="about"
            isSelected={pageOpen === "about"}
          />
        </button>
        <button 
          onClick={() => handlePageSelect("projects")} 
          className="w-full transition-all duration-200 transform active:scale-[0.98]"
        >
          <Page
            title="Projects"
            tagline="A showcase of my best work"
            type="projects"
            isSelected={pageOpen === "projects"}
          />
        </button>

        <button 
          onClick={() => handlePageSelect("exp")} 
          className="w-full transition-all duration-200 transform active:scale-[0.98]"
        >
          <Page
            title="Experience"
            tagline="My professional work history"
            type="exp"
            isSelected={pageOpen === "exp"}
          />
        </button>

        <button 
          onClick={() => handlePageSelect("blog")} 
          className="w-full transition-all duration-200 transform active:scale-[0.98]"
        >
          <Page title="Blog" tagline="My thoughts over the years" type="blog" isSelected={pageOpen === "blog"} />
        </button>

        <button 
          onClick={() => handlePageSelect("contact")} 
          className="w-full mb-12 transition-all duration-200 transform active:scale-[0.98]"
        >
          <Page title="Contact" tagline="Get in touch with me" type="contact" isSelected={pageOpen === "contact"} />
        </button>
      </div>
    </section>
  );
};
export default SidebarMobile;
