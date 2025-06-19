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
import { flushSync } from "react-dom";
import { AppContext } from "../sidebar/AppContext";
import ContactMessages from "./Contact/ContactMessages";
import SidebarMobile from "../sidebar/SidebarMobile";
import {motion} from "framer-motion";
import { useModalImage } from "../ModalImageContext";
// Removed: import { getAIResponse } from "../../../utils/openai";

const Main = () => {
  const { pageOpen, setMenuOpen, menuOpen, setPageOpen } = useContext(AppContext);
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

  // Touch gesture states for swipe detection
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const [swipeProgress, setSwipeProgress] = useState(0);
  const [isSwipeActive, setIsSwipeActive] = useState(false);

  // Section history for back navigation
  const [sectionHistory, setSectionHistory] = useState(["home"]);

  // Minimum distance for a swipe (in pixels)
  const minSwipeDistance = 50;
  const maxSwipeDistance = 150;

  // Track page changes to build history
  useEffect(() => {
    if (pageOpen && sectionHistory[sectionHistory.length - 1] !== pageOpen) {
      setSectionHistory(prev => [...prev, pageOpen]);
    }
  }, [pageOpen]);

  // Scroll to top when page changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pageOpen]);

  // Handle touch start
  const onTouchStart = (e) => {
    // Only enable swipe on mobile devices
    if (window.innerWidth >= 768) return;
    
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
    setIsSwipeActive(true);
  };

  // Handle touch move with progressive feedback
  const onTouchMove = (e) => {
    // Only enable swipe on mobile devices
    if (window.innerWidth >= 768) return;
    
    if (!touchStart) return;
    
    const currentTouch = e.targetTouches[0].clientX;
    setTouchEnd(currentTouch);
    
    const distance = touchStart - currentTouch;
    const progress = Math.min(Math.abs(distance) / maxSwipeDistance, 1);
    
    setSwipeProgress(progress);
  };

  // Handle touch end and detect swipe with smooth transitions
  const onTouchEnd = () => {
    // Only enable swipe on mobile devices
    if (window.innerWidth >= 768) return;
    
    if (!touchStart || !touchEnd) {
      resetSwipeState();
      return;
    }
    
    const distance = touchStart - touchEnd;
    const isRightSwipe = distance < -minSwipeDistance;
    const isLeftSwipe = distance > minSwipeDistance;
    
    // Add haptic feedback for successful swipes
    if ((isRightSwipe || isLeftSwipe) && navigator.vibrate) {
      navigator.vibrate(50);
    }
    
    if (isRightSwipe && !menuOpen) {
      // Right swipe: Open sidebar with smooth transition
      setTimeout(() => {
        setMenuOpen(true);
      }, 100);
    } else if (isLeftSwipe && menuOpen) {
      // Left swipe when sidebar is open: Close sidebar
      setTimeout(() => {
        setMenuOpen(false);
      }, 100);
    } else if (isLeftSwipe && !menuOpen && sectionHistory.length > 1) {
      // Left swipe when sidebar is closed: Go back to previous section
      const newHistory = [...sectionHistory];
      newHistory.pop();
      const previousSection = newHistory[newHistory.length - 1];
      
      // Smooth transition to previous section
      setTimeout(() => {
        setSectionHistory(newHistory);
        setPageOpen(previousSection);
      }, 150);
    }
    
    resetSwipeState();
  };

  // Reset swipe state with smooth animation
  const resetSwipeState = () => {
    setIsSwipeActive(false);
    setSwipeProgress(0);
    setTouchStart(null);
    setTouchEnd(null);
  };

  const handleSendMessage = async (text) => {
    // Immediately add user message with flushSync for instant rendering
    flushSync(() => {
      setMessagesBySection((prev) => ({
        ...prev,
        [pageOpen]: [...prev[pageOpen], { text, type: "blue" }],
      }));
    });

    // Scroll to bottom immediately after adding message
    setTimeout(() => {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 0);

    // Check if this is the TikTok question and respond automatically
    if (text.trim() === "Why would you be a perfect fit as a tiktok intern?") {
      const predefinedResponseContent = (
        <div>
          Hey! I just wrapped up an exchange year at the University of California, Irvine, one of the best experiences I've had so far, both personally and professionally. It really pushed me to grow, explore, and think bigger.
          <br/><br/>
          Right now, I'm developing an educational project in the music industry that's set to launch midway through the next academic year. I'm super excited about it! But in the meantime, this summer is looking surprisingly low-key, and honestly, I can't think of a better way to spend it than working at TikTok. I mean... is there a cooler place to grow, learn, and contribute?
          <br/><br/>
          As for me, I'm a pretty chill guy, naturally entrepreneurial, and I genuinely enjoy working, especially when I'm surrounded by smart people who make the process fun and meaningful. Right now I'm actually traveling through Yosemite National Park, wrapping up my time in the U.S. after this incredible year. I even found myself doing a bit of programming at the Visitor Center just for fun. I guess I can't help but get involved wherever I go.
          <br/><br/>
          I've led small teams, launched creative projects, and worked closely with artists and collaborators. I move fast, adapt quickly, and love using tech (especially AI) to solve problems and build things that work.
          <br/><br/>
          I'm looking for an opportunity this summer where I can keep learning and bring real value. The MAI team at TikTok sounds like exactly the kind of environment I'd love to be part of.
          <br/><br/>
          Hope to connect soon :)
        </div>
      );

      // Add the predefined response immediately
      setMessagesBySection((prev) => ({
        ...prev,
        [pageOpen]: [...prev[pageOpen], { text: predefinedResponseContent, type: "gray", isJSX: true }],
      }));
      return;
    }

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
    <section 
      className="w-full md:w-2/3 flex flex-col h-full md:h-auto md:rounded-tr-2xl md:rounded-br-2xl transition-all duration-300 ease-out relative"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      {/* Fixed Header for Mobile */}
      <div className="fixed md:relative top-0 left-0 md:left-auto right-0 md:right-auto w-full md:w-auto z-30 bg-secondary md:rounded-tr-2xl p-4 border-b border-lsecondary md:border-b-0">
        <div className="flex w-full items-center gap-2 text-txt text-sm">
          <div className="md:hidden flex w-full justify-center items-center relative">
            <button 
              onClick={() => setMenuOpen(!menuOpen)} 
              className="absolute left-0 p-2 rounded-full transition-all duration-200 active:scale-95"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15,18 9,12 15,6"/>
              </svg>
            </button>
            {menuOpen && (
              <div className="fixed absolute top-2 left-0 z-[50] transition-all duration-300 ease-out">
                <SidebarMobile />
              </div>
            )}
            <div className="flex items-center justify-center">
              <p className="text-white text-lg font-medium">
                get to know me better
              </p>
            </div>
          </div>
          <div className="hidden md:flex w-full justify-center items-center">
            <p className="text-white text-lg font-medium">
              iMessage
            </p>
          </div>
        </div>
      </div>
      
      {/* Swipe indicator overlay */}
      {isSwipeActive && swipeProgress > 0.3 && (
        <div 
          className="fixed inset-0 z-10 pointer-events-none flex items-center justify-center"
          style={{
            backgroundColor: `rgba(0, 0, 0, ${swipeProgress * 0.1})`,
            transition: 'background-color 0.1s ease-out'
          }}
        >
          <div 
            className="bg-white bg-opacity-20 backdrop-blur-sm rounded-full px-6 py-3 text-white text-lg font-medium"
            style={{
              transform: `scale(${0.8 + (swipeProgress * 0.2)})`,
              opacity: swipeProgress
            }}
          >
            {swipeProgress > 0.7 ? (
              touchStart > touchEnd ? '← Back' : '→ Menu'
            ) : (
              touchStart > touchEnd ? '←' : '→'
            )}
          </div>
        </div>
      )}
      
      <div 
        className="text-white px-4 py-2 flex flex-col justify-start gap-1 w-full h-full grow overflow-y-auto bg-primary pb-24 pt-24 md:pt-2" 
        style={{ scrollBehavior: 'smooth' }}
      >
        <h1 className="text-xs text-txt text-center mb-4">iMessage</h1>
        {renderMessages()}
        {messagesBySection[pageOpen]?.map((msg, index) =>
          msg.type === "blue" ? (
            <BlueMessage 
              key={index} 
              message={msg.text} 
              order={index + 100} 
              isUserMessage={true}
            />
          ) : (
            <GrayMessage 
              key={index} 
              message={msg.text} 
              bg="#44484e" 
              order={index + 100} 
              isAIResponse={true}
              isJSX={msg.isJSX || false}
            />
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
