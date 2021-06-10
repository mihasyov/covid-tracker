import React from "react";
import InfoBox from "./InfoBox";

const InfoBoxes = ({ casesType, setCasesType }) => {
  return (
    <>
      <InfoBox
        active={casesType === "cases"}
        onClick={() => setCasesType("cases")}
        title="Cases"
        type="cases"
        totalType="todayCases"
      />
      <InfoBox
        isGreen
        active={casesType === "recovered"}
        onClick={() => setCasesType("recovered")}
        title="Recovered"
        type="recovered"
        totalType="todayRecovered"
      />
      <InfoBox
        active={casesType === "deaths"}
        onClick={() => setCasesType("deaths")}
        title="Deaths"
        type="deaths"
        totalType="todayDeaths"
      />
    </>
  );
}

export default InfoBoxes;
