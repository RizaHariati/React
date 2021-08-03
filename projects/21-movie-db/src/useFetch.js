import { useState, useEffect } from "react";

const API_ENDPOINT = `http://www.omdbapi.com/?apikey=ebb5d959`;

export const useFetch = (urlParams) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({ show: false, msg: "" });
  const [movies, setMovies] = useState([]);

  const fetchData = async (url) => {
    setLoading(true);
    try {
      const resp = await fetch(url);
      const data = await resp.json();

      if (data.Response === "True") {
        setMovies(data.Search || data);
        if (data.totalResults > 10000) {
          setError({ show: true, msg: "Too Many Results" });
        } else {
          setError({ show: false, msg: "" });
        }
      } else {
        setError({ show: true, mgs: data.Error });
      }
      setLoading(false);
    } catch (error) {}
  };

  useEffect(() => {
    fetchData(`${API_ENDPOINT}${urlParams}`);
  }, [urlParams]);

  return { loading, error, movies };
};
