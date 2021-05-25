import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";
import '../styles/InfoBox.css';

function InfoBox({ title, cases, total, onClick, active, isGreen }) {
  console.log("infoBox render")
  return (
    <Card
      onClick={onClick} 
      className={`infoBox ${active && "infoBox--active"}`}>
      <CardContent>
        <Typography color="textSecondary" className="infoBox__title">
          {title}
        </Typography>
        <h2 className={`infoBox__cases ${isGreen && "infoBox__cases--green"}`}>{cases}</h2>
        <Typography color="textSecondary" className="infoBox__total">
          Total: {total}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default InfoBox;
