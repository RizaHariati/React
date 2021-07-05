import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { bookData } from "./books.js";
import Book from "./BookFunction";

function BookList() {
  return (
    <section>
      {bookData.map((book) => {
        return <Book key={book.id} {...book}></Book>;
      })}
    </section>
  );
}

// const Book = (props) => {
//   const { img, title, author, id } = props.theBook;

//   return (
//     <div className="book">
//       <img className="image" src={img} alt={"book" + id} />
//       <div className="info">
//         <h4>{title}</h4>
//         <p>{author}</p>
//       </div>
//     </div>
//   );
// };
ReactDOM.render(<BookList />, document.getElementById("root"));
