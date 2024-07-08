import React, {useState, useEffect} from "react";
import Countries from "./country";

const CountryContainer = () =>{

    const[countries, setCountries] = useState([])

    useEffect(() => {
        const fetchCountries = async () => {
            try {
                const response = await fetch('https://restcountries.com/v3.1/all')
                const data = await response.json()
                console.log(data)
                setCountries(data)
            }
            catch(error){
                console.error("Error fetching countries:", error)
            }
        }
        fetchCountries()
    }, [])

    return(
        <>
        <div className="container">
            <div className="row justify-content-around">
                {
                    countries.slice(0, 50).map((country, index) => {
                        return(
                            <div className="col-md-4 mb-4" key={index}>
                            <Countries countrydata = {country}/>
                        </div>
                        )
                    })
                        
                }
            </div>
        </div>
        </>
    )
}

export default CountryContainer