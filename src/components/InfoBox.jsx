import React from "react";
import { connect } from "react-redux";
import { Card, CardContent, Typography } from "@material-ui/core";
import "../styles/InfoBox.css";
import { formatStats } from "../utils/formatStats";

const InfoBox = ({
  title,
  onClick,
  active,
  isGreen,
  totalType,
  type,
  countryDetails,
}) => {
  return (
    <Card
      onClick={onClick}
      className={`infoBox ${active && "infoBox--active"}`}
    >
      <CardContent>
        <Typography color="textSecondary" className="infoBox__title">
          {title}
        </Typography>
        <h2 className={`infoBox__cases ${isGreen && "infoBox__cases--green"}`}>
          {formatStats(countryDetails[type])}
        </h2>
        <Typography color="textSecondary" className="infoBox__total">
          Total: {formatStats(countryDetails[totalType])}
        </Typography>
      </CardContent>
    </Card>
  );
};

const mapStateToProps = (state) => ({
  countryDetails: state.countryDetails,
});
export default connect(mapStateToProps)(InfoBox);
