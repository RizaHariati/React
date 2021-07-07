import React, { useState, useEffect } from "react";

const url = "http://www.omdbapi.com/?s=harry&apikey=ebb5d959&plot=short";
// const url = " https://api.github.com/users/RizaHariati";

const MultipleReturns = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({});
  const [isError, setIsError] = useState(false);

  //   const getData = () => {
  //     fetch(url)
  //       .then((resp) => resp.json())
  //       .then((user) => {
  //         setData(user);
  //         setLoading(false);
  //       })
  //       .catch((error) => setIsError(true));
  //   };
  const getData = async () => {
    const resp = await fetch(url);
    const data = await resp.json();
    const error = await resp.status;

    if (error > 200 || error > 300) {
      console.log(error);
      setLoading(false);
      setIsError(true);
    } else {
      setData(data.Search[0]);
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  if (loading) {
    return <h2>Loading...</h2>;
  }
  if (isError) {
    return <h2 style={{ color: "red" }}>Error 404</h2>;
  }
  return (
    <div className="card">
      <div className="image">
        <img src={data.Poster} alt={data.imdbID} />
      </div>
      <div>
        <h4>{data.Title}</h4>
        <a href={data.Poster}>learn more</a>
      </div>
    </div>
  );
};

export default MultipleReturns;
