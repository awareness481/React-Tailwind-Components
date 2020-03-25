import React, { useState } from "react";
import Tab from "./Tab";

const TabNavigation = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleClick = e => setActiveTab(Number.parseInt(e.target.getAttribute('index'), 10));
  const tabs = ["Tab-1", "Tab-2", "Tab-3", "Tab-4"];

  const mapTabs = () => tabs.map((tab, i) => (
    <Tab value={tab} index={i + 1} handleClick={handleClick} current={activeTab} key={tab}/>
  ));
 
  return (
    <div className="bg-white">
      <nav className="flex flex-col sm:flex-row">
        {mapTabs()}
      </nav>
    </div>
  );
};

export default TabNavigation;
