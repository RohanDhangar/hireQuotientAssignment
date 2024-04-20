import React, { useEffect, useState } from "react";
import getAPIData from "./Api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
// import SubTab from "./SubTab";

function Tab({ filteredValue }) {
  const [data, setData] = useState([]);
  const [icon, setIcon] = useState(faChevronDown);
  const [clicked, setClicked] = useState(false);
  const [isVisible, setIsVisible] = useState("hidden");
  //   console.log(filteredValue);
  useEffect(() => {
    getAPIData("https://canopy-frontend-task.vercel.app/api/holdings")
      .then((jsonData) => {
        const sortedData = jsonData.payload.filter(
          (item) => item.asset_class === filteredValue
        );
        setData(sortedData);
        console.log(sortedData);
      })
      .catch(() => {
        console.log("Error happend while fetch call");
      });
  }, []);
  return (
    // <div>
    //   {data.map((temp, index) => (
    //     <div key={index}>{temp.name}</div>
    //   ))}
    // </div>
    <div
      className={`rounded-[10px] border-[0.7px] border-solid border-[#e9edef] mx-[170px] mb-[10px] bg-white "w-[1170px]"
    xxll:w-[1000px] xxll:mx-[140px] xll:w-[800px] xll:mx-[100px] lgg:w-[600px] lgg:mx-[60px] mdd:w-[400px] smm:w-[300px] smm:mx-[20px]`}
    >
      <div
        className={`flex justify-between items-center  my-2.5 p-2.5 
    `}
      >
        <h1
          className={`flex-1 text-2xl  font-semibold bg-[#fefffe] px-5 py-[8px] border-r-[0.7px] border-r-[#e9edef] border-solid`}
        >
          {filteredValue} ({data.length})
        </h1>
        <FontAwesomeIcon
          icon={icon}
          className={`cursor-pointer px-5 py-3 text-[#006bfe]`}
          onClick={() => {
            setClicked(!clicked);
            if (clicked) {
              setIcon(faChevronUp);
              setIsVisible("block");
            } else {
              setIcon(faChevronDown);
              setIsVisible("hidden");
            }
          }}
        />
      </div>
      <div className={`flex justify-center px-2.5 py-0 ${isVisible}`}>
        <p className="w-[285px] bg-[#fefffe] text-[#122c45] text-base font-medium justify-center px-[30px] py-1 mdd:w-[200px] smm:w-[100px]">
          Name
        </p>
        <p className="w-[180px] bg-[#fefffe] text-[#122c45] text-base text-center font-[450] flex items-center justify-center px-0 py-1 mdd:w-[100px] smm:w-[50px]">
          Ticker
        </p>
        <p className="w-[180px] bg-[#fefffe] text-[#122c45] text-base text-center font-[450] flex items-center justify-center px-0 py-1 mdd:w-[100px] smm:w-[50px]">
          Average Price
        </p>
        <p className="w-[180px] text-[#122c45] text-base text-center font-[450] flex items-center justify-center px-0 py-1 bg-[#f3f6fe] p-0 mdd:w-[100px] smm:w-[50px]">
          Market Price
        </p>
        <p className="w-[180px] bg-[#fefffe] text-[#122c45] text-base text-center font-[450] flex items-center justify-center px-0 py-1 mdd:w-[100px] smm:w-[50px]">
          Market Value CCY
        </p>
        <p className="w-[180px] bg-[#fefffe] text-[#122c45] text-base text-center font-[450] flex items-center justify-center px-0 py-1 mdd:w-[100px] smm:w-[50px]">
          Latest Change Percentage
        </p>
      </div>
      {data.map((item, idx) => (
        <div
          className={`flex justify-center px-2.5 py-0 ${isVisible}`}
          key={idx}
        >
          <p className="w-[285px] bg-[#fefffe] text-[#122c45] text-base font-medium justify-center px-[30px] py-1 mdd:w-[200px] smm:w-[100px]">
            {item.name ? item.name : "N/A"}
          </p>
          <p className="w-[180px] bg-[#fefffe] text-[#122c45] text-base text-center font-[450] flex items-center justify-center px-0 py-1 mdd:w-[100px] smm:w-[50px]">
            {item.ticker ? item.ticker : "N/A"}
          </p>
          <p className="w-[180px] bg-[#fefffe] text-[#122c45] text-base text-center font-[450] flex items-center justify-center px-0 py-1 mdd:w-[100px] smm:w-[50px]">
            {item.avg_price ? item.avg_price : "N/A"}
          </p>
          <p className="w-[180px] text-[#122c45] text-base text-center font-[450] flex items-center justify-center px-0 py-1 bg-[#f3f6fe] p-0 mdd:w-[100px] smm:w-[50px]">
            <div className="px-2.5 py-1">
              {item.market_price ? item.market_price : "N/A"}
            </div>
          </p>
          <p className="w-[180px] bg-[#fefffe] text-[#122c45] text-base text-center font-[450] flex items-center justify-center px-0 py-1 mdd:w-[100px] smm:w-[50px]">
            {item.market_value_ccy ? item.market_value_ccy : "N/A"}
          </p>
          <p className="w-[180px] bg-[#fefffe] text-[#122c45] text-base text-center font-[450] flex items-center justify-center px-0 py-1 mdd:w-[100px] smm:w-[50px]">
            {item.latest_chg_pct ? item.latest_chg_pct : "N/A"}
          </p>
        </div>
      ))}
    </div>
  );
}

export default Tab;
