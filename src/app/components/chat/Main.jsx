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

    // Check if this is the David Ruidor question and respond automatically
    if (text.trim() === "Why would you be a perfect fit as David Ruidor's personal assistant?") {
      const predefinedResponseContent = (
        <div>
          Hey! I'm currently studying but my schedule's pretty chill — my own projects don't take up much time right now, so I've got the space and focus to really support someone like David.
          <br/><br/>
          I've worked with high-level people before, managed my podcast, teams, and projects, and I'm good at keeping things running smooth while staying on top of details.
          <br/><br/>
          People around me often say I'm super resourceful and adapt quickly to new environments — I take pride in figuring things out fast and making stuff work.
          <br/><br/>
          Lately I've been going full vibe-coder mode — didn't know how to write a single line 6 months ago but AI and tech have always called me, so I've been diving in hard.
          <br/><br/>
          Ideally looking for something remote, part-time, where I can learn from someone top like David ; ) while contributing real value.
          <br/><br/>
          If it sounds even half interesting, let me call you for 5 mins and I'll finish convincing you 👀 (644880952)
          <br/><br/>
          Also checkout the{' '}
          <span
            onClick={() => setPageOpen('about')}
            className="text-blue-500 underline cursor-pointer hover:text-blue-400 transition-colors duration-200"
            style={{ 
              textDecorationColor: '#3b82f6',
              textUnderlineOffset: '2px',
              fontWeight: 'normal'
            }}
          >
            ABOUT
          </span>
          {' '}section to know more about me
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
