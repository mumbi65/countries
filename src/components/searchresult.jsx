import React from "react";
import { Link, useLocation } from "react-router-dom";

const SearchResult = () => {

    const location = useLocation()
    const {country} = location.state
    
    return(
        <>
        <div className="card" style={{maxWidth: '300px', margin: '50px', padding: '10px'}}>
            <img src={country.flags.png} alt="" />
            <h5>Country: {country.name.common}</h5>
            <p>Capital: {country.capital}</p>
            <p>Continent: {country.continents}</p>
            <Link to="/countrydetails" state={country} style={{textAlign: 'center', textDecoration: 'none', color: 'black', backgroundColor: 'lightgray', margin: '5px', maxWidth: '100px', padding: '5px', borderRadius: '10px'}} >View More</Link>
        </div>
        </>
    )
}

export default SearchResult