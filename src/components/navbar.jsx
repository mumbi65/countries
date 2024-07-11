import React from "react";
import { Link } from "react-router-dom";
import Select from "react-select";
import SearchResult from "./searchresult";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const NavBar = () => {

    const [countries, setCountries] = useState([])
    const [searchQuery, setSearchQuery] = useState('')
    const [filteredCountires, setFiletredCountries] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        axios.get("https://restcountries.com/v3.1/all").then((response) => {
            setCountries(response.data)
            
        })
        .catch((error) =>{
            console.error("Error fetching countries:", error)
            
        })
    }, [])

    const handleSearchChange = (e) => {
        const query = e.target.value
        setSearchQuery(query)
        if(query){
            const filtered = countries.filter(country => country.name.common.toLowerCase().includes(query.toLowerCase()))
            setFiletredCountries(filtered)
        }else{
            setFiletredCountries([])
        }
    }

    const handleCountrySelect = (country) => {
        setSearchQuery(country.name.common)
        setFiletredCountries([])
        navigate('/searchresult', {state: {country}})
    }

    const handleSearchSubmit = (e) => {
        e.preventDefault()
        const country = countries.find(country => country.name.common.toLowerCase() === searchQuery.toLowerCase())
        if(country) {
            navigate("/searchresult", {state: {country}})
        }
        else{
            alert("Country not found")
        }

    }

    return(
        <>
        <div className="countries-nav-bar">
            <h1 className="navbar-title">Countries <span>Around</span></h1>
            <div className="countries-nav-links">
                <ul className="nav nav-underline">
                    <li className="nav-item">
                        <Link to="/" className="nav-link active" aria-current="page" >Home</Link>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle dropdown-link" href="#" role="buttton" id="navbarDropdown" data-bs-toggle="dropdown" aria-expanded="false" style={{color: 'black'}}>Continents</a>
                        <ul className="dropdown-menu custom-dropdown" aria-labelledby="navbarDropdown">
                            <Link to="/continents" state={'Africa'} style={{textDecoration: 'none'}}>
                                <li><a className="dropdown-item custom-dropdown-item" href="">Africa</a></li>
                            </Link>
                            <Link to="/continents" state={'Asia'} style={{textDecoration: 'none'}}>
                                <li><a className="dropdown-item custom-dropdown-item" href="">Asia</a></li>
                            </Link>
                            <Link to="/continents" state={'Oceania'} style={{textDecoration: 'none'}}>
                                <li><a className="dropdown-item custom-dropdown-item" href="">Oceania</a></li>
                            </Link>
                            <Link to="/continents" state={'North America'} style={{textDecoration: 'none'}}>
                                <li><a className="dropdown-item custom-dropdown-item" href="">North America</a></li>
                            </Link>
                            <Link to="/continents" state={'Antarctica'} style={{textDecoration: 'none'}}>
                                <li><a className="dropdown-item custom-dropdown-item" href="">Antarctica</a></li>
                            </Link>
                            <Link to="/continents" state={'South America'} style={{textDecoration: 'none'}}>
                                <li><a className="dropdown-item custom-dropdown-item" href="">South America</a></li>
                            </Link>
                            <Link to="/continents" state={'Europe'} style={{textDecoration: 'none'}}>
                                <li><a className="dropdown-item custom-dropdown-item" href="">Europe</a></li>
                            </Link>
                        </ul>
                    </li>
                </ul>
            </div>
            <div>
                <form class="d-flex" role="search" onSubmit={handleSearchSubmit}>
                    <input
                        type="text"
                        onChange={handleSearchChange}
                        placeholder="Search for a country..."
                        className="form-control me-2"
                        aria-label="Search"
                        value={searchQuery}
                    />
                    <button class="btn btn-outline-success" type="submit">Search</button>
                </form>
                {filteredCountires.length > 0 && (
                    <ul className="dropdown-menu show" style={{ position: "absolute", zIndex: 1000, width: "300px" }}>
                    {
                        filteredCountires.map((country, index) => (
                    
                                <li key={index} className="dropdown-item" onClick={() => handleCountrySelect(country)}>
                                    {country.name.common}
                                </li>
                        ))
                    }
                </ul>
                )}
            </div>
        </div> 
        </>
    )
}

export default NavBar