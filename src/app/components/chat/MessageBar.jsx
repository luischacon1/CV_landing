import { useState, useContext, useEffect } from "react";
import { AppContext } from "../sidebar/AppContext";
import { useModalImage } from "../ModalImageContext";
import "./shimmer.css";

const MessageBar = ({ onSendMessage, isLoading }) => {
  const [message, setMessage] = useState("");
  const [isMobile, setIsMobile] = useState(false);
  const { pageOpen, menuOpen } = useContext(AppContext);
  const { modalImg } = useModalImage();

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim() && !isLoading) {
      onSendMessage(message);
      setMessage("");
    }
  };

  // Hide MessageBar when:
  // - No page is selected
  // - Mobile sidebar is open
  // - Modal image is open
  if (!pageOpen || (isMobile && menuOpen) || modalImg) {
    return null;
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="fixed bottom-0 left-0 right-0 md:left-1/3 z-[100] flex gap-3 w-full md:w-2/3 p-4 justify-center items-center border-t border-lsecondary md:border-t-0 bg-primary"
      style={{ minHeight: '60px' }}
    >
      {/* Camera/Plus Button - Apple style */}
      <button
        type="button"
        className="flex justify-center items-center bg-lsecondary w-8 h-8 rounded-full transition-all duration-200 hover:bg-gray-600 active:scale-95"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/>
          <circle cx="12" cy="13" r="3"/>
        </svg>
      </button>
      
      <div className="flex-1 bg-lsecondary text-white flex items-center rounded-[20px] min-h-[36px] px-4 py-2 border-2 border-transparent focus-within:border-iblue transition-all duration-200">
        {!message && !isLoading && (
          <div className="mr-1">
            <div className="w-0.5 h-4 bg-iblue animate-blink"></div>
          </div>
        )}
        <input
          type="text"
          placeholder={isLoading ? "Luis is typing..." : "ask me anything..."}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          disabled={isLoading}
          className="bg-transparent w-full outline-none shimmer-placeholder disabled:opacity-50 text-white placeholder-gray-400"
          style={{ fontSize: '16px', lineHeight: '1.4' }}
        />
      </div>
      
      {/* Audio/Voice Button - Standard audio waves icon */}
      <button
        type="button"
        className="flex justify-center items-center bg-lsecondary w-8 h-8 rounded-full transition-all duration-200 hover:bg-gray-600 active:scale-95"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="white" stroke="none">
          <rect x="2" y="10" width="2" height="4" rx="1"/>
          <rect x="6" y="6" width="2" height="12" rx="1"/>
          <rect x="10" y="8" width="2" height="8" rx="1"/>
          <rect x="14" y="4" width="2" height="16" rx="1"/>
          <rect x="18" y="7" width="2" height="10" rx="1"/>
          <rect x="22" y="9" width="2" height="6" rx="1"/>
        </svg>
      </button>
      
      {/* Send Button - Apple style arrow */}
      <button
        type="submit"
        disabled={isLoading || !message.trim()}
        className="flex justify-center items-center w-8 h-8 rounded-full transition-all duration-200 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
        style={{
          backgroundColor: message.trim() && !isLoading ? '#007AFF' : '#8E8E93'
        }}
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <line x1="7" y1="17" x2="17" y2="7"/>
          <polyline points="7,7 17,7 17,17"/>
        </svg>
      </button>
    </form>
  );
};

export default MessageBar;
