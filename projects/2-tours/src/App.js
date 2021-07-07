import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import EmptyData from "./EmptyData";
import Tours from "./Tours";

const url = "https://course-api.com/react-tours-project";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const removeItem = (id) => {
    const newList = tours.filter((item) => item.id !== id);
    setTours(newList);
  };

  const fetchData = async () => {
    const resp = await fetch(url);
    const data = await resp.json();
    const status = await resp.status;
    if (status < 200 || status > 300) {
      console.log("error");
    } else {
      setLoading(false);
      setTours(data);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return <Loading />;
  }
  if (!loading && tours.length === 0) {
    return <EmptyData />;
  }
  return (
    <div className="container">
      <h1>Our Tours</h1>
      <Tours tours={tours} removeItem={removeItem} />
    </div>
  );
};

export default App;
