const Page = ({
  title = "Home",
  tagline = "Welcome and quick introduction",
  type = "home",
  isSelected = false,
}) => {
  
  const renderIcon = () => {
    const iconProps = {
      width: "28",
      height: "28",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "white",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    };

    switch(type) {
      case "home":
        return (
          <svg {...iconProps}>
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
            <polyline points="9,22 9,12 15,12 15,22"/>
          </svg>
        );
      case "about":
        return (
          <svg {...iconProps}>
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
            <circle cx="12" cy="7" r="4"/>
          </svg>
        );
      case "exp":
        return (
          <svg {...iconProps}>
            <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
            <line x1="8" y1="21" x2="16" y2="21"/>
            <line x1="12" y1="17" x2="12" y2="21"/>
          </svg>
        );
      case "blog":
        return (
          <svg {...iconProps}>
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
            <polyline points="14,2 14,8 20,8"/>
            <line x1="16" y1="13" x2="8" y2="13"/>
            <line x1="16" y1="17" x2="8" y2="17"/>
            <polyline points="10,9 9,9 8,9"/>
          </svg>
        );
      case "projects":
        return (
          <svg {...iconProps}>
            <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
            <line x1="8" y1="21" x2="16" y2="21"/>
            <line x1="12" y1="17" x2="12" y2="21"/>
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
    <div 
      className={`flex flex-row p-4 text-txt transition-all duration-200 rounded-xl active:scale-[0.98] ${
        isSelected ? 'bg-iblue text-txtlight' : ''
      }`}
      style={{ minHeight: '80px' }}
    >
      <div className="w-1/5 mr-3">
        <div className="flex justify-center items-center rounded-full bg-lsecondary w-16 h-16">
          {renderIcon()}
        </div>
      </div>

      <div className="flex flex-col justify-center w-4/5 h-16 gap-1">
        <div className="flex w-full justify-between text-xl">
          <h1 className="font-semibold text-white">{title}</h1> 
          <h2 className="text-base">21:56</h2>
        </div>
        <p className="text-start text-base leading-tight">{tagline}</p>
      </div>
    </div>
  );
};
export default Page;
