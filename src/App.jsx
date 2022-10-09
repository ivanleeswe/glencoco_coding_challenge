import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

import CompanyCard from "./cards/CompanyCard";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(
        "https://api.glencoco.io/public/front_end/exercise"
      );
      setData(res.data.companies);
    };
    fetchData();
  }, []);

  return (
    <div className="container">
      {data.map((company) => (
        <CompanyCard company={company} />
      ))}
    </div>
  );
}

export default App;
