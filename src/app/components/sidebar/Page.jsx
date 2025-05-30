const currDate = new Date().toLocaleTimeString([], {hour: '2-digit', minute: '2-digit', hour12: false});

const Page = ({
  title = "Home",
  tagline = "Welcome and quick introduction",
  type = "home",
  isSelected = false,
}) => {

  const renderIcon = () => {
    const iconProps = {
      width: "40",
      height: "40",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "white",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    };

    switch(type) {
      case "home":
        return (
          <svg {...iconProps}>
            <path d="M9 21V13.6a.6.6 0 0 1 .6-.6h4.8a.6.6 0 0 1 .6.6V21"/>
            <path d="M2.35 10.3c-.38-.27-.38-.84 0-1.1l8.9-6.2c.38-.26 1.02-.26 1.4 0l8.9 6.2c.38.26.38.83 0 1.1L12 15.5 2.35 10.3z"/>
          </svg>
        );
      case "about":
        return (
          <svg {...iconProps}>
            <circle cx="12" cy="8" r="5"/>
            <path d="M20 21a8 8 0 0 0-16 0"/>
          </svg>
        );
      case "exp":
        return (
          <svg {...iconProps}>
            <rect x="2" y="4" width="20" height="16" rx="3"/>
            <path d="M8 2v4"/>
            <path d="M16 2v4"/>
            <path d="M2 10h20"/>
          </svg>
        );
      case "blog":
        return (
          <svg {...iconProps}>
            <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/>
            <polyline points="14,2 14,8 20,8"/>
            <line x1="16" y1="13" x2="8" y2="13"/>
            <line x1="16" y1="17" x2="8" y2="17"/>
            <line x1="10" y1="9" x2="8" y2="9"/>
          </svg>
        );
      case "projects":
        return (
          <svg {...iconProps}>
            <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
            <line x1="8" y1="21" x2="16" y2="21"/>
            <line x1="12" y1="17" x2="12" y2="21"/>
            <circle cx="8" cy="9" r="1"/>
            <path d="M21 15l-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/>
          </svg>
        );
      case "contact":
        return (
          <svg {...iconProps}>
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
            <polyline points="22,6 12,13 2,6"/>
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div className={`flex flex-row p-6 hover:bg-iblue text-txt transition-all duration-200 hover:text-txtlight rounded-xl ${
      isSelected ? 'bg-iblue text-txtlight' : ''
    }`} style={{ minHeight: '100px' }}>
      <div className="w-1/5 mr-4">
        <div className="flex justify-center items-center rounded-full bg-lsecondary w-20 h-20">
          {renderIcon()}
        </div>
      </div>

      <div className="flex flex-col justify-center w-4/5 h-20 gap-2">
        <div className="flex w-full justify-between text-xl">
          <h1 className="font-semibold text-white">{title}</h1> 
          <h2 className="text-base">{currDate}</h2>
        </div>
        <p className="text-start text-base leading-tight">{tagline}</p>
      </div>
    </div>
  );
};
export default Page;
