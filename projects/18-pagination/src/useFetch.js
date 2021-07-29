import { useState, useEffect } from "react";
const url = "https://api.github.com/users/john-smilga/followers?per_page=100";
export const useFetch = () => {
  const [loading, setLoading] = useState(true);
  const [followers, setFollowers] = useState([]);

  const fetchData = async () => {
    try {
      const resp = await fetch(url);
      const data = await resp.json();
      if (data) {
        const newData = data.map((item) => {
          const { id, login: name, avatar_url: img, html_url: url } = item;

          return { id, name, img, url };
        });
        // console.log(newData);
        setFollowers(newData);
      }
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return { loading, followers };
};
