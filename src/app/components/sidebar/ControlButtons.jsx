const ControlButtons = () => {
    return (
      <>
        <div className="flex items-center w-full justify-between py-2 mt-2 px-4">
          <div className="flex gap-2 h-6 items-center">
            <a href="" className="flex bg-red-600 w-3 h-3 rounded-full" />

            <a href="" className="flex bg-yellow-600 w-3 h-3 rounded-full" />

            <a href="" className="flex bg-green-600 w-3 h-3 rounded-full" />
          </div>

          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
            <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
          </svg>
        </div>
      </>
    );
}
export default ControlButtons;
    
