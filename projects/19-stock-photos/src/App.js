import React, { useState, useEffect, useRef, useCallback } from "react";
import Photo from "./Photo";

const mainUrl = `https://api.unsplash.com/photos/`;
const searchUrl = `https://api.unsplash.com/search/photos/`;
const clientID = `?client_id=HVuD1001aWELsnY6t5sxI-1c_kEiPGwJL12e9mDYV80`;

const App = () => {
  const [loading, setLoading] = useState(false);
  const [photos, setPhotos] = useState([]);
  const [page, setPage] = useState(0);
  const [query, setQuery] = useState("");
  const refInput = useRef(null);

  const handleInput = useCallback(() => {
    setQuery(refInput.current.value);
    // console.log(query);
  }, [refInput]);

  const fetchData = async () => {
    setLoading(true);
    let url;
    const urlPage = `&page=${page}`;
    const urlQuery = `&query=${query}`;

    if (query === "") {
      url = `${mainUrl}${clientID}${urlPage}`;
    }
    if (query) {
      if (page > 0 && query.length === 1) {
        setPage(0);
        url = `${searchUrl}${clientID}${urlPage}${urlQuery}`;
      } else {
        url = `${searchUrl}${clientID}${urlPage}${urlQuery}`;
      }
    }
    try {
      const resp = await fetch(url);
      const data = await resp.json();
      let newData;
      if (query) {
        newData = data.results;
      } else {
        newData = data;
      }

      setPhotos((prevPhotos) => {
        if (page === 0) {
          return newData;
        } else {
          return [...prevPhotos, ...newData];
        }
      });
    } catch (error) {
      console.log(error);
    }

    setLoading(false);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    refInput.current.value = "";
    refInput.current.focus();
  };
  useEffect(() => {
    fetchData();
  }, [page, query]);

  function handleScroll() {
    if (
      !loading &&
      window.innerHeight + window.scrollY >= document.body.scrollHeight
    ) {
      setPage((prevPage) => prevPage + 1);
    }
  }
  useEffect(() => {
    const listenWindow = window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", listenWindow);
    };
  }, []);
  return (
    <div className="container">
      <form className="search-form" onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          name="search"
          id="search"
          className="search"
          placeholder="search image"
          // value={query}
          ref={refInput}
          onChange={handleInput}
        />
        <button type="submit" className="search-btn">
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
      <div className="images">
        {loading && <h1 className="loading">Loading...</h1>}
      </div>
    </div>
  );
};

export default App;
