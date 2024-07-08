import React from "react";
import { Link } from "react-router-dom";

const Countries = ({countrydata}) => {
    return(
        <>
            <Link to="/countrydetails" state={countrydata} style={{textDecoration: "none", width: "18rem"}} className="card">
                <img src={countrydata.flags.png} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Country: {countrydata.name.common} <span style={{color: "grey", textDecoration: "underline"}}>{countrydata.altSpellings[0]}</span></h5>
                        <p className="card-text">Capital: {countrydata.capital}</p>
                        <p className="card-text">Continet: {countrydata.continents}</p>
                    </div>
            </Link>  
        </>
    )
}

export default Countries

// flag, coatofarms
// name
// continent
// capital
// languages
// population
// and then display a list of the altspellings of related countries in the same continent
// and then display an embeded map of the country