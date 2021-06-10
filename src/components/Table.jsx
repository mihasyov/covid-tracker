import React from "react";
import { connect } from "react-redux";
import numeral from "numeral";
import "../styles/Table.css";

const Table = ({ countriesList }) => {
  return (
    <div className="table">
      <table>
        <tbody>
          {countriesList.map(({ country, cases }, i) => (
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

const mapStateToProps = (state) => ({
  countriesList: state.countriesList.sort((a, b) => b.cases - a.cases),
});

export default connect(mapStateToProps)(Table);
