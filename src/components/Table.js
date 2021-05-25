import React from "react";
import "../styles/Table.css";
import numeral from 'numeral';

function Table({ countries }) {
  console.log("table render")
  return (
    <div className="table">
      <table>
        <tbody>
          {countries.map(({ country, cases }, i) => (
            <tr key={i}>
              <td>{country}</td>
              <td>
                <strong>{numeral(cases).format("0,0")}</strong>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default React.memo(Table);
