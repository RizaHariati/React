import React, { useContext } from "react";
import { TextContext } from "./App";
const List = () => {
  const textContext = useContext(TextContext);
  const { groceryList, removeItem, editItem } = textContext;
  return (
    <>
      <div className="list-container">
        {groceryList.map((item) => {
          return (
            <div key={item.id} className="item">
              <p className="text">{item.name}</p>
              <div className="btn-container">
                <button
                  className="icon-btn edit"
                  onClick={() => editItem(item.id)}
                >
                  <i className="fa fa-edit"></i>
                </button>
                <button
                  className="icon-btn remove"
                  onClick={() => removeItem(item.id)}
                >
                  <i className="fa fa-trash"></i>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default List;
