import { FaGithub, FaLinkedin, FaSearch, FaBriefcase } from "react-icons/fa";
import { FaXTwitter, FaYoutube } from "react-icons/fa6";
import "./shimmer-resume.css";

const Pinned = () => {
  return (
    <section className="h-36">
      {/* Search Bar */}
      <div className="px-3 h-12">
        <div className="bg-lsecondary text-txt rounded-lg h-8 p-2 flex gap-2 text-sm items-center">
          <FaSearch size={14} />
          <input
            type="text"
            placeholder="Search"
            className="bg-lsecondary w-full outline-none transition-transform duration-200 ease-in-out focus:scale-105"
          />
        </div>
      </div>

      {/* Social Links */}
      <div className="flex gap-4 justify-center">
        {/* GitHub */}
        <div className="flex flex-col gap-2 items-center">
          <a
            href="https://github.com/luischacon1"
            target="_blank"
            className="flex justify-center items-center bg-lsecondary w-8 h-8 p-1 rounded-full \
            transition-all duration-300 ease-in-out transform hover:scale-110 hover:rotate-6 hover:bg-iblue"
          >
            <FaGithub size={16} color="white" />
          </a>
          <h3 className="text-xs text-txt">GitHub</h3>
        </div>

        {/* LinkedIn */}
        <div className="flex flex-col gap-2 items-center">
          <a
            href="https://www.linkedin.com/in/luis-fernandez-chacon/"
            target="_blank"
            className="flex justify-center items-center bg-lsecondary w-8 h-8 p-1 rounded-full \
            transition-all duration-300 ease-in-out transform hover:scale-110 hover:rotate-6 hover:bg-iblue"
          >
            <FaLinkedin size={16} color="white" />
          </a>
          <h3 className="text-xs text-txt">LinkedIn</h3>
        </div>

        {/* X (Twitter) */}
        <div className="flex flex-col gap-2 items-center">
          <a
            href="https://x.com/Luis_fchacon"
            target="_blank"
            className="flex justify-center items-center bg-lsecondary w-8 h-8 p-1 rounded-full \
            transition-all duration-300 ease-in-out transform hover:scale-110 hover:rotate-6 hover:bg-iblue"
          >
            <FaXTwitter size={16} color="white" />
          </a>
          <h3 className="text-xs text-txt">X</h3>
        </div>

        {/* YouTube */}
        <div className="flex flex-col gap-2 items-center">
          <a
            href="https://www.youtube.com/watch?v=mUqx8NFBc54&list=PLpTZ1Ji32zWkJ-C4WBSZ5aK9siBUkgi9c&index=13"
            target="_blank"
            className="flex justify-center items-center bg-lsecondary w-8 h-8 p-1 rounded-full \
            transition-all duration-300 ease-in-out transform hover:scale-110 hover:rotate-6 hover:bg-iblue"
          >
            <FaYoutube size={16} color="white" />
          </a>
          <h3 className="text-xs text-txt">YouTube</h3>
        </div>

        {/* Resume */}
        <div className="flex flex-col gap-2 items-center">
          <a
            href="/portfolio/luis/CV_luis_fernandez.pdf"
            download="CV_luis_fernandez.pdf"
            className="flex justify-center items-center bg-gray-500 w-8 h-8 p-1 rounded-full shimmer-resume \
            transition-all duration-300 ease-in-out transform hover:scale-110 hover:rotate-6"
          >
            <FaBriefcase size={16} color="white" />
          </a>
          <h3 className="text-xs text-txt">Resume</h3>
        </div>
      </div>
    </section>
  );
};

export default Pinned;
