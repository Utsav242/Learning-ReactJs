import { useState } from "react";

const TabButton = () => {
  const content = [
    ["1. first button clicked"],[ "2. second button clicked"],[ "3. third button clicked"]];

  const [activeTab, setactiveTab] = useState(false);
  const handleTabChange=(index)=>{
    setactiveTab(index)
  }

  return (
    <>
      <h1>Learning React :- click on tab data show accordinly tab.</h1>
      <div className="cardSection">
        <button onClick={()=> handleTabChange(0)} className={activeTab === 0 ? 'active' : ""}>First Button</button>
        <button onClick={()=> handleTabChange(1)} className={activeTab === 1 ? 'active' : ""}>Second Button</button>
        <button onClick={()=> handleTabChange(2) } className={activeTab ===2 ? 'active' : ""}>Third Button</button>

        <div className="cardItem">
            {content[activeTab]}
        </div>
      </div>
    </>
  );
};

export default TabButton;
