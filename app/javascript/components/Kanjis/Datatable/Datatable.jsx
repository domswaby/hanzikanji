import React from "react";
import PropTypes from "prop-types";
import { BrowserRouter as Router, Link } from "react-router-dom";
import parse from "html-react-parser";
import "../../../../assets/stylesheets/Datatable.css";

const Datatable = ({ data, deck }) => {
  const columns = data[0] && Object.keys(data[0]);
  return (
    <table cellPadding={0} cellSpacing={0}>
      <thead>
        <tr>
          {data[0] &&
            columns.map((heading) => {
              console.log(heading);
              if (heading !== "parts") {
                if(heading === "number"){
                  return <th>#</th>;
                }
                return <th>{heading}</th>;
              }
            })}
        </tr>
      </thead>

      <tbody>
        {data.map((row, card_index) => (
          <tr>
            {" "}
            {columns.map((column) => {
              if (column !== "parts") {
                if (column === "story") {
                  return (
                    <td>
                      <Link to={`/cards/${deck}/${data[0].number + card_index}`}>{parse(row[column])}</Link>
                    </td>
                  );

                } else if (column === "number"){
                  return (
                    <td>
                      <Link to={`/cards/${deck}/${data[0].number + card_index}`}>{row[column]}</Link>
                    </td>
                  );

                }
                else {
                  return (
                    <td>
                      <Link to={`/cards/${deck}/${data[0].number + card_index}`}>{row[column]}</Link>
                    </td>
                  );
                }
              }
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Datatable;
