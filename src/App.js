import React from "react";
import "./index.css";
import Tab from "./Component/Tab";

function App() {
  
  return (
    <div className=" pt-[50px] pb-[55.5px] bg-[#dae1f3]">
      <Tab filteredValue="Bond" />
      <Tab filteredValue="Cash" />
      <Tab filteredValue="Real Estate" />
      <Tab filteredValue="Equity" />
      <Tab filteredValue="Fund" />
      <Tab filteredValue="Loan" />
    </div>
  );
}

export default App;
