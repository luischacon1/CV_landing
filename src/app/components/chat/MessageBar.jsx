import { useState, useContext, useEffect } from "react";
import { AppContext } from "../sidebar/AppContext";
import { useModalImage } from "../ModalImageContext";
import "./shimmer.css";

const MessageBar = ({ onSendMessage, isLoading }) => {
  const [message, setMessage] = useState("Why would you be a perfect fit as a tiktok intern?");
  const [isMobile, setIsMobile] = useState(false);
  const { pageOpen, menuOpen } = useContext(AppContext);
  const { modalImg } = useModalImage();

  // Check if it's the default message
  const isDefaultMessage = message === "Why would you be a perfect fit as a tiktok intern?";

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
      const messageToSend = message.trim();
      // Clear message immediately for instant feedback
      setMessage("");
      // Send the message
      onSendMessage(messageToSend);
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
      className="fixed bottom-0 right-0 z-[100] flex gap-2 md:gap-4 p-3 md:p-6 justify-center items-center border-t border-lsecondary md:border-t-0 bg-primary"
      style={{ 
        minHeight: isDefaultMessage && isMobile ? '120px' : isMobile ? '60px' : '80px',
        width: isMobile ? '100%' : '66.67%', // Match the chat area width (w-2/3)
        left: isMobile ? '0' : 'auto', // Remove left positioning on desktop
        right: '0' // Keep right alignment
      }}
    >
      {/* Camera/Plus Button - Apple style */}
      <button
        type="button"
        className="flex justify-center items-center bg-lsecondary w-7 h-7 md:w-10 md:h-10 rounded-full transition-all duration-200 md:hover:bg-gray-600 active:scale-95 flex-shrink-0"
        style={{ alignSelf: 'flex-end', marginBottom: isDefaultMessage && isMobile ? '16px' : '12px' }}
      >
        <svg width={isMobile ? "14" : "18"} height={isMobile ? "14" : "18"} viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/>
          <circle cx="12" cy="13" r="3"/>
        </svg>
      </button>
      
      <div 
        className="flex-1 bg-lsecondary text-white flex items-center rounded-[20px] px-3 md:px-6 py-2 md:py-4 border-2 border-transparent focus-within:border-iblue transition-all duration-200"
        style={{
          minHeight: isDefaultMessage && isMobile ? '80px' : isMobile ? '36px' : '56px',
          alignItems: isDefaultMessage && isMobile ? 'flex-start' : 'center',
          paddingTop: isDefaultMessage && isMobile ? '16px' : isMobile ? '8px' : '12px',
          paddingBottom: isDefaultMessage && isMobile ? '16px' : isMobile ? '8px' : '12px'
        }}
      >
        {!message && !isLoading && (
          <div className="mr-1" style={{ marginTop: isDefaultMessage && isMobile ? '8px' : '0' }}>
            <div className="w-0.5 h-4 md:h-6 bg-iblue animate-blink"></div>
          </div>
        )}
        <textarea
          placeholder={isLoading ? "Luis is typing..." : "ask me anything..."}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
              e.preventDefault();
              handleSubmit(e);
            }
          }}
          disabled={isLoading}
          className="bg-transparent w-full outline-none shimmer-placeholder disabled:opacity-50 text-white placeholder-gray-400 resize-none"
          rows={isDefaultMessage && isMobile ? 3 : 1}
          style={{ 
            fontSize: isMobile ? '16px' : '22px',
            lineHeight: '1.4',
            caretColor: 'transparent',
            height: isDefaultMessage && isMobile ? '60px' : 'auto',
            minHeight: isDefaultMessage && isMobile ? '60px' : isMobile ? '20px' : '32px',
            maxHeight: isDefaultMessage && isMobile ? '60px' : 'auto',
            overflow: 'hidden'
          }}
        />
      </div>
      
      {/* Audio/Voice Button - Standard audio waves icon */}
      <button
        type="button"
        className="flex justify-center items-center bg-lsecondary w-7 h-7 md:w-10 md:h-10 rounded-full transition-all duration-200 md:hover:bg-gray-600 active:scale-95 flex-shrink-0"
        style={{ alignSelf: 'flex-end', marginBottom: isDefaultMessage && isMobile ? '16px' : '12px' }}
      >
        <svg width={isMobile ? "14" : "18"} height={isMobile ? "14" : "18"} viewBox="0 0 24 24" fill="white" stroke="none">
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
        className="flex justify-center items-center w-7 h-7 md:w-10 md:h-10 rounded-full transition-all duration-200 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed flex-shrink-0"
        style={{
          backgroundColor: message.trim() && !isLoading ? '#007AFF' : '#8E8E93',
          alignSelf: 'flex-end',
          marginBottom: isDefaultMessage && isMobile ? '16px' : '12px'
        }}
      >
        <svg width={isMobile ? "12" : "16"} height={isMobile ? "12" : "16"} viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <line x1="7" y1="17" x2="17" y2="7"/>
          <polyline points="7,7 17,7 17,17"/>
        </svg>
      </button>
    </form>
  );
};

export default MessageBar;
