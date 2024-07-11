import React, {useState, useEffect} from "react";
import Countries from "./country";
import axios from "axios";
import { OrbitProgress } from "react-loading-indicators";

const CountryContainer = () =>{

    const[countries, setCountries] = useState([])
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        axios.get("https://restcountries.com/v3.1/all").then((response) => {
            setCountries(response.data)
            setIsLoaded(true)
        })
        .catch((error) =>{
            console.error("Error fetching countries:", error)
            setIsLoaded(true)
        })
        
    }, [])

    return(
        <>
        <div className="container">
            <div className="row justify-content-around">
                {
                  isLoaded ? countries.map((country, index) => {
                        return(
                            <div className="col-md-4 mb-4" key={index}>
                            <Countries countrydata = {country}/>
                        </div>
                        )
                    })
                    :
                    <OrbitProgress color="#32cd32" size="medium" text="" textColor=""p/>
                        
            }
            

            </div>
        </div>
        </>
    )
}

export default CountryContainer