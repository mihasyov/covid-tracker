const covidURL = "https://disease.sh/v3/covid-19";

export const fetchCountriesList = () => {
    return fetch(`${covidURL}/countries`)
            .then(resp => resp.json())
            .catch(err => console.log(err));
}

export const fetchCountryDetails = (countryName) => {
    // const coords = country === "worldwide" ? [44, -40] : null;
    const url = `${covidURL}/countries/${countryName}?yesterday=true`;
    
    return fetch(url)
            .then((resp) => resp.json())
            .catch(err => console.log(err));
}

export const fetchChartData =  () => {
    return fetch("https://disease.sh/v3/covid-19/historical/all?lastdays=180")
            .then(resp => resp.json())
            .catch(err => console.log(err));
}

