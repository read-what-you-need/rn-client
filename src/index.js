import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";

/**
 * TODO:
 * - [] add react router: for book read page
 * - [] add search input: for search within file
 *     - [] add dynamic search support
 *     - [] make search input sticky
 * - [] show all search result lines in book highlighted
 * - [] each highlight has tooltip
 *    - [] mark as read or not option (if read show violet)
 *    - [] times highlighted by X number of users
 * - [] show quality coverage (defined by:= number of higlights * (each highlight normalized score [based on max count]))
 * - [] each book has a question page
 *    - [] all questions asked by all users
 *      - [] again questions are searchable
 *      - [] show by highest ranked (mark as read or not read)
 */

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
