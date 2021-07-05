import React from "react";

const BookFunction = (props) => {
  const { img, title, author, id } = props;
  const clickHandler = () => {
    alert("Let's buy!");
  };
  const changingTitle = (e) => {
    e.currentTarget.style.color = "red";
    console.log(author);
  };
  const returnTitle = (e) => {
    e.currentTarget.style.color = "black";
    console.log(author);
  };
  return (
    <div className="book">
      <img className="image" src={img} alt={"book" + id} />
      <div className="info">
        <h4
          onMouseEnter={(e) => changingTitle(e)}
          onMouseLeave={(e) => returnTitle(e)}
        >
          {title}
        </h4>
        <p>{author}</p>
        <button type="button" className="btn" onClick={clickHandler}>
          Buy Now!
        </button>
      </div>
    </div>
  );
};

export default BookFunction;
