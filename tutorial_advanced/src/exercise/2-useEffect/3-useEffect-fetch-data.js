import React, { useState, useEffect } from "react";

const url = "https://api.github.com/users";
const useEffectFetchData = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const resp = await fetch(url);
    const data = await resp.json();
    setUsers(data);
  };
  useEffect(() => {
    getUsers();
  }, []);
  return (
    <>
      <h3>GitHub Users</h3>
      <div className="row col-3">
        {users.map((user) => {
          const { id, login, avatar_url, html_url } = user;

          return (
            <div key={id} className="card">
              <div className="image">
                <img src={avatar_url} alt={login} />
              </div>
              <div>
                <h4>{login}</h4>
                <a href={html_url}>learn more</a>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default useEffectFetchData;
