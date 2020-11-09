import React from "react";
import PropTypes from "prop-types";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "./Datatable.css";

const Datatable = ({ data }) => {
  const columns = data[0] && Object.keys(data[0]);
  return (
    <table cellPadding={0} cellSpacing={0}>
      <thead>
        <tr>{data[0] && columns.map((heading) => <th>{heading}</th>)}</tr>
      </thead>

      <tbody>
        {data.map((row) => (
          <tr>
            {" "}
              {columns.map((column) => (
                <td>
                  <Link to={`/kanji/${row["number"]}`}>
                  {row[column]}
                </Link>
                </td>
              ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Datatable;
