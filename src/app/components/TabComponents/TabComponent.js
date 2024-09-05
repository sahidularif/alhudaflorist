import React from "react";


export const TabContent = ({ id, openTab, children }) => (
  <div className={openTab === id ? "block" : "hidden"} id={`link${id}`}>
    {children}
  </div>
);
{/* <div className="flex items-center dark:bg-gray-800 dark:text-gray-100">
	<a rel="noopener noreferrer" href="#" className="px-5 py-1 border-b-2 dark:border-violet-400 dark:text-violet-400">Architecto</a>
	<a rel="noopener noreferrer" href="#" className="px-5 py-1 border-b-2 dark:border-gray-700">Corrupti</a>
	<a rel="noopener noreferrer" href="#" className="px-5 py-1 border-b-2 dark:border-gray-700">Excepturi</a>
	<a rel="noopener noreferrer" href="#" className="px-5 py-1 border-b-2 dark:border-gray-700">Consectetur</a>
</div> */}
export const Tab = ({ id, label, openTab, setOpenTab }) => (
  <li className="-flex items-center">
    <a
      className={`text-sm font-normal hover:border-b-2 hover:border-[#E6BE8A]/50 px-4 cursor-pointer block leading-normal ${openTab === id
          ? `text-[#0c5b47] border-b-2 border-[#E6BE8A]/50`
          : `text-[#0c5b47]/50`
        }`}
      onClick={(e) => {
        e.preventDefault();
        setOpenTab(id);
      }}
      data-toggle={`tab${id}`}
      role="tablist"
    >
      {label}
    </a>
  </li>
);
export const ReviewTab = ({ id, label, openTab, setOpenTab }) => (
  <li className="-mb-px mr-2 w-auto last:mr-0 flex-auto text-center">
    <a
      className={`text-medium font-bold uppercase px-4 cursor-pointer py-3 shadow-lg block leading-normal ${openTab === id
          ? `text-[#80B500] bg-white border-b-2 border-[#80B500]`
          : `text-gray-800 bg-white `
        }`}
      onClick={(e) => {
        e.preventDefault();
        setOpenTab(id);
      }}
      data-toggle={`tab${id}`}
      role="tablist"
    >
      {label}
    </a>
  </li>
);
