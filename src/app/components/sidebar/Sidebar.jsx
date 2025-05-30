import Page from "./Page";
import Pinned from "./Pinned";
import ControlButtons from "./ControlButtons";
import { useContext, useState } from "react";
import { AppContext } from "./AppContext";

const Sidebar = () => {
  const { setPageOpen, pageOpen } = useContext(AppContext);

  return (
    <section className="hidden md:flex md:flex-col h-screen bg-secondary/95 w-1/3 rounded-tl-2xl rounded-bl-2xl overflow-hidden">
      {/* Control Buttons - Fixed at top */}
      <div className="flex-shrink-0">
        <ControlButtons />
      </div>

      {/* Pinned Section - Fixed size */}
      <div className="flex-shrink-0 px-4 py-6">
        <Pinned />
      </div>

      {/* Pages Section - Scrollable with better spacing */}
      <div className="flex-1 overflow-y-auto px-4 pb-6 space-y-4">
        <button 
          onClick={() => setPageOpen("home")} 
          className={`w-full transition-all duration-200 ${pageOpen === "home" ? "scale-[0.98]" : "hover:scale-[1.02]"}`}
        >
          <Page isSelected={pageOpen === "home"} />
        </button>

        <button 
          onClick={() => setPageOpen("about")} 
          className={`w-full transition-all duration-200 ${pageOpen === "about" ? "scale-[0.98]" : "hover:scale-[1.02]"}`}
        >
          <Page
            title="About"
            tagline="Learn more about me and my journey"
            type="about"
            isSelected={pageOpen === "about"}
          />
        </button>

        <button 
          onClick={() => setPageOpen("projects")} 
          className={`w-full transition-all duration-200 ${pageOpen === "projects" ? "scale-[0.98]" : "hover:scale-[1.02]"}`}
        >
          <Page
            title="Projects"
            tagline="A showcase of my best work"
            type="projects"
            isSelected={pageOpen === "projects"}
          />
        </button>

        <button 
          onClick={() => setPageOpen("exp")} 
          className={`w-full transition-all duration-200 ${pageOpen === "exp" ? "scale-[0.98]" : "hover:scale-[1.02]"}`}
        >
          <Page
            title="Experience"
            tagline="My professional work history"
            type="exp"
            isSelected={pageOpen === "exp"}
          />
        </button>

        <button 
          onClick={() => setPageOpen("blog")} 
          className={`w-full transition-all duration-200 ${pageOpen === "blog" ? "scale-[0.98]" : "hover:scale-[1.02]"}`}
        >
          <Page 
            title="Blog" 
            tagline="My thoughts over the years" 
            type="blog"
            isSelected={pageOpen === "blog"}
          />
        </button>

        <button 
          onClick={() => setPageOpen("contact")} 
          className={`w-full transition-all duration-200 ${pageOpen === "contact" ? "scale-[0.98]" : "hover:scale-[1.02]"}`}
        >
          <Page 
            title="Contact" 
            tagline="Get in touch with me" 
            type="contact"
            isSelected={pageOpen === "contact"}
          />
        </button>
      </div>
    </section>
  );
};

export default Sidebar;
