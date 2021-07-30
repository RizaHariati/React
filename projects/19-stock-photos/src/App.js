import React, { useState, useEffect } from "react";
import Photo from "./Photo";

const mainUrl = `https://api.unsplash.com/photos/`;
const searchUrl = `https://api.unsplash.com/search/photos/`;
const clientID = `?client_id=HVuD1001aWELsnY6t5sxI-1c_kEiPGwJL12e9mDYV80`;

const App = () => {
  const [loading, setLoading] = useState(false);
  const [photos, setPhotos] = useState([]);
  const [page, setPage] = useState(0);
  const [query, setQuery] = useState("");

  const fetchImage = async () => {
    setLoading(true);
    let url;
    const urlPage = `&page=${page}`;
    const urlQuery = `&query=${query}`;

    if (query) {
      url = `${searchUrl}${clientID}${urlPage}${urlQuery}`;
    } else {
      url = `${mainUrl}${clientID}${urlPage}`;
    }

    try {
      const resp = await fetch(url);
      const data = await resp.json();
      console.log(data);
      setPhotos((prevPhotos) => {
        if (query && page === 1) {
          return data.results;
        } else if (query) {
          return [...prevPhotos, ...data.results];
        } else {
          return [...prevPhotos, ...data];
        }
      });
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchImage();
  }, [page]);

  useEffect(() => {
    const event = window.addEventListener("scroll", () => {
      if (
        (!loading && window.innerHeight + window.scrollY) >=
        document.body.scrollHeight - 2
      ) {
        setPage((prevPage) => {
          return prevPage + 1;
        });
      }
    });
    return () => window.removeEventListener("scroll", event);
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    setPage(1);
    e.target.value = "";
  };
  return (
    <div className="container">
      <form className="search-form">
        <input
          type="text"
          name="search"
          id="search"
          className="search"
          placeholder="search image"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit" className="search-btn" onClick={handleSubmit}>
          <i className="fa fa-search"></i>
        </button>
      </form>

      <div className="image-container">
        <div className="images">
          {photos.map((item, index) => {
            return <Photo key={index} {...item} />;
          })}
        </div>
      </div>
      {loading && <h1>Loading...</h1>}
    </div>
  );
};

export default App;
