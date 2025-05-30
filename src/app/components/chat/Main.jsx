"use client";
import BlueMessage from "./BlueMessage";
import GrayMessage from "./GrayMessage";
import MessageBar from "./MessageBar";
import ExperiencesMessages from "./Experiences/ExperiencesMessages";
import AboutMessages from "./About/AboutMessages";
import HomeMessages from "./Home/HomeMessages";
import ProjectsMessages from "./Projects/ProjectsMessages";
import BlogMessages from "./Blog/BlogMessages";
import { useState, useContext, useEffect, useRef } from "react";
import { AppContext } from "../sidebar/AppContext";
import ContactMessages from "./Contact/ContactMessages";
import SidebarMobile from "../sidebar/SidebarMobile";
import {motion} from "framer-motion";
import { useModalImage } from "../ModalImageContext";
// Removed: import { getAIResponse } from "../../../utils/openai";

const Main = () => {
  const { pageOpen, setMenuOpen, menuOpen } = useContext(AppContext);
  const [messagesBySection, setMessagesBySection] = useState({
    home: [],
    exp: [],
    about: [],
    projects: [],
    blog: [],
    contact: [],
  });
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);
  const { modalImg } = useModalImage();

  // Scroll to top when page changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pageOpen]);

  useEffect(() => {
    setMenuOpen(!menuOpen);
  }, [pageOpen]);

  const handleSendMessage = async (text) => {
    // Add user message
    setMessagesBySection((prev) => ({
      ...prev,
      [pageOpen]: [...prev[pageOpen], { text, type: "blue" }],
    }));

    // Get AI response from serverless function
    setIsLoading(true);
    try {
      console.log('Sending message to API:', { text, currentSection: pageOpen });
      
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: text,
          currentSection: pageOpen,
        }),
      });

      const data = await response.json();
      console.log('API response:', data);

      if (!response.ok) {
        // Handle specific error cases
        let errorMessage = "Sorry, I'm having trouble responding right now.";
        
        if (data.error === 'OpenAI API key not configured') {
          errorMessage = "Hi! I'm not fully set up yet. The developer needs to add the OpenAI API key.";
        } else if (data.error === 'Invalid OpenAI API key') {
          errorMessage = "There's an issue with my configuration. Please check back later!";
        } else if (response.status >= 500) {
          errorMessage = "I'm experiencing some technical difficulties. Try again in a moment!";
        }
        
        setMessagesBySection((prev) => ({
          ...prev,
          [pageOpen]: [...prev[pageOpen], { text: errorMessage, type: "gray" }],
        }));
        return;
      }

      const aiResponseText = data.content;
      setMessagesBySection((prev) => ({
        ...prev,
        [pageOpen]: [...prev[pageOpen], { text: aiResponseText, type: "gray" }],
      }));
    } catch (error) {
      console.error("Error in AI response:", error);
      setMessagesBySection((prev) => ({
        ...prev,
        [pageOpen]: [
          ...prev[pageOpen],
          {
            text: "Sorry, I'm having connection issues. Can you try again?",
            type: "gray",
          },
        ],
      }));
    }
    setIsLoading(false);
  };

  const renderMessages = () => {
    if (pageOpen === "home") {
      return <HomeMessages />;
    } else if (pageOpen === "exp") {
      return <ExperiencesMessages />;
    } else if (pageOpen === "about") {
      return <AboutMessages />;
    } else if (pageOpen === "projects") {
      return <ProjectsMessages />;
    } else if (pageOpen === "blog") {
      return <BlogMessages />;
    } else if (pageOpen === "contact") {
      return <ContactMessages />;
    } else {
      return <div className="flex flex-grow" />;
    }
  };

  return (
    <section className="w-full md:w-2/3 flex flex-col h-full md:h-auto md:rounded-tr-2xl md:rounded-br-2xl">
      <div className="fixed relative top-0 right-0 bg-secondary md:rounded-tr-2xl p-4 border-b border-lsecondary md:border-b-0">
        <div className="flex w-full items-center gap-2 text-txt text-sm">
          <div className="md:hidden flex w-full justify-center items-center relative">
            <button 
              onClick={() => setMenuOpen(!menuOpen)} 
              className="absolute left-0 p-2 rounded-full transition-all duration-200 hover:bg-lsecondary active:scale-95"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15,18 9,12 15,6"/>
              </svg>
            </button>
            {menuOpen && (
              <div className="fixed absolute top-2 left-0 z-[50]">
                <SidebarMobile />
              </div>
            )}
            <div className="flex items-center justify-center">
              <p className="text-white text-lg font-medium">
                get to know me better
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="text-white px-4 py-2 flex flex-col justify-start gap-1 w-full h-96 grow overflow-y-auto bg-primary pb-20 md:pb-4" style={{ scrollBehavior: 'smooth' }}>
        <h1 className="text-xs text-txt text-center mb-4">iMessage</h1>
        {renderMessages()}
        {messagesBySection[pageOpen]?.map((msg, index) =>
          msg.type === "blue" ? (
            <BlueMessage key={index} message={msg.text} order={index + 100} />
          ) : (
            <GrayMessage key={index} message={msg.text} bg="#44484e" order={index + 100} />
          )
        )}
        {isLoading && (
          <motion.div
            initial={{ scale: 0.5, opacity: 0, y: 10 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 150, damping: 15 }}
            className="ml-0 mb-1"
          >
            <div className="flex items-center justify-center bg-secondary w-16 py-2 rounded-[18px] rounded-bl-[4px] items-center gap-1 text-gray-400 text-lg shadow-lg">
              <div className="animate-bounce">•</div>
              <div className="animate-bounce delay-100">•</div>
              <div className="animate-bounce delay-200">•</div>
            </div>
          </motion.div>
        )}
        <div ref={messagesEndRef} />
      </div>
      <MessageBar onSendMessage={handleSendMessage} isLoading={isLoading} />
    </section>
  );
};

export default Main;
