import React, {useState, useEffect} from "react";
import NavBar from "./navbar";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";


const ContinentData = () =>{
    const location = useLocation()
    const continentdata = location.state
    console.log(continentdata)

    const[continentdetails, setContinentDetails] = useState([])

    useEffect(() => {
        const fetchContinentData = async () => {
            try {
                const response = await fetch ('https://restcountries.com/v3.1/all')
                const data = await response.json()
                setContinentDetails(data)
                console.log(data)
                
            } catch (error) {
                console.error("Error fetching related countries:", error) 
            }
        }
        fetchContinentData()
    }, [])
    return(
        <>
        <NavBar/>
        <h1 style={{textAlign: "center"}}>Countries in {continentdata}</h1>
        <div className="container">
            <div className="row justify-content-around">
                {
                    continentdetails.filter(continentdetail => continentdetail.continents.includes(continentdata)).map((continentdetail, index) => (
                           <Link to="/countrydetails" state={continentdetail} className="card col-md-4 mb-3" key={index} style={{textDecoration: "none", width: "18rem"}}>
                                <img src={continentdetail.flags.png} alt="" />
                                <h5>Country: {continentdetail.name.common}</h5>
                                <p>Capital: {continentdetail.capital}</p>
                                <p>Continent: {continentdetail.continents}</p>
                           </Link>
                    ))
                }
            </div>
        </div>
        </>
    )
}

export default ContinentData