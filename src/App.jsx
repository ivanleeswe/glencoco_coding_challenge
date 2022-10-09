import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import InfiniteScroll from "react-infinite-scroll-component";
import CompanyCard from "./cards/CompanyCard";

function App() {
  const [currentLength, setCurrentLength] = useState(20);
  const [data, setData] = useState([]);
  const [currentData, setCurrentData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(
        "https://api.glencoco.io/public/front_end/exercise"
      );
      setData(res.data.companies);
      setCurrentData(res.data.companies.slice(0, 20));
    };
    fetchData();
  }, []);

  const fetchMoreData = () => {
    setTimeout(() => {
      const newData = currentData.concat(
        data.slice(currentLength, currentLength + 20)
      );
      setCurrentData(newData);
      setCurrentLength(currentLength + 20);
    });
  };

  return (
    <InfiniteScroll
      dataLength={currentData.length}
      next={fetchMoreData}
      hasMore={true}
      loader={<h4>Loading...</h4>}
    >
      <div className="container">
        {currentData.map((company) => (
          <CompanyCard company={company} />
        ))}
      </div>
    </InfiniteScroll>
  );
}

export default App;
