import React, {useState, useEffect} from "react";
import { useLocation } from "react-router-dom";
import NavBar from "./navbar";
import { Link } from "react-router-dom";

const CountryDetails = () => {
    const location = useLocation()
    const details = location.state
    console.log(details)

    const[relatedCountries, setRelatedCountries] = useState([])

    useEffect(() => {
        const fetchRelatedCountries = async () => {
            try {
            const response = await fetch(`https://restcountries.com/v3.1/region/${details.continents}`)
            const data = await response.json()
            console.log(data)
            setRelatedCountries(data.filter(country => country.name.common !== details.name.common))
                
            } catch (error) {
                console.error("Error fetching related countries:", error) 
            }
        }
        fetchRelatedCountries()
    }, [details.continents, details.name.common])

    const mapUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d992018.5138025816!2d-177.1627807!3d-13.774512249999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x71c8b1066e1a4b3d%3A0x16c918ec8fd20a1b!2s${details.name.common}!5e0!3m2!1sen!2ske!4v1720246770779!5m2!1sen!2ske`;

    return(
        <>
        <NavBar/>
        <div style={{ display: 'flex', justifyContent: 'center', margin: '20px' }}>
                <div style={{ border: '1px solid #ddd', padding: '20px', width: '80%' }}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <img src={details.flags.png} alt={`${details.name.common} flag`} style={{ width: '400px', height: 'auto', marginRight: '20px' }} />
                        {
                        details.coatOfArms && details.coatOfArms.png && (
                            <img src={details.coatOfArms.png} alt={`${details.name.common} coat of arms`} style={{ width: '400px', height: 'auto' }} />
                        )}
                    </div>
                    <div className="details" style={{ marginTop: '20px' }}>
                        <div>
                        <h2>{details.name.common}</h2>
                        <p>Continent: {details.continents}</p>
                        <p>Capital: {details.capital}</p>
                        <p>Languages: {Object.values(details.languages).join(', ')}</p>
                        <p>Population: {details.population.toLocaleString()}</p>
                        </div> 
                        <div>
                            <h3>Related Countries in {details.continents}</h3>
                            <ul>
                                {
                                relatedCountries.map((relatedCountry, index) => (
                                    <Link to='/countrydetails' state={relatedCountry} key={index} className="detailslink">
                                         <li>{relatedCountry.name.common} ({relatedCountry.altSpellings.join(', ')})</li>
                                    </Link>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div style={{ marginTop: '20px', textAlign: "center" }}>
                                <iframe
                                    title="Country Map"
                                    src={mapUrl}
                                    width="600"
                                    height="450"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>
                    </div>
                    <Link to="/" className="btn btn-outline-secondary" style={{textAlign: 'center'}}>Home</Link>
                </div>
            </div>
        </>        
    )
}

export default CountryDetails

// 25343294