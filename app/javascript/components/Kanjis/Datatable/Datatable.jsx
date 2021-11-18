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
        <tr key="heading">
          {data[0] &&
            columns.map((heading) => {

              if (heading !== "parts") {
                if(heading === "number"){
                  return <th key={heading}>#</th>;
                }
                return <th key={heading}>{heading}</th>;
              }
            })}
        </tr>
      </thead>

      <tbody>
        {data.map((row, card_index) => (
          <tr key={data[card_index].char}>
            {columns.map((column) => {
              if (column !== "parts") {
                if (column === "story") {
                  return (
                    <td key={column}>
                      <Link to={`/cards/${deck}/${data[0].number + card_index}`}>{parse(row[column])}</Link>
                    </td>
                  );

                } else if (column === "number"){
                  return (
                    <td key={column}>
                      <Link to={`/cards/${deck}/${data[0].number + card_index}`}>{row[column]}</Link>
                    </td>
                  );

                }
                else {
                  return (
                    <td key={column}>
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
