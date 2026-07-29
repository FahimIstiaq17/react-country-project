import React,{use, useState} from 'react';
import Country from '../Country/Country';
import './Countries.css';

const Countries = ({countriesPromise}) => {

    const [visitedCountries, setVisitedCountries] = useState([]);
    const [visitedFlags, setVisitedFlags] = useState([]);

    const handleVisitedCountries = (country) => {
        console.log('handle visited countries: clicked ' , country);
        const newVisitedCountries = [...visitedCountries, country];
        setVisitedCountries(newVisitedCountries);

    };

    const handleVisitedFlags = (flag) => {
        const newVisitedFlags = [...visitedFlags, flag];
        setVisitedFlags(newVisitedFlags);
        console.log('flags need to be added: clicked ' , flag);
    };

    const countriesData = use(countriesPromise);
    const countries = countriesData.countries;
    // console.log(countries);

    return (
        <div>
            <h2>In the country.....{countries.length} </h2>
            <h3>Total Countries Visited: {visitedCountries.length}</h3>
            <h3>Total Flags Visited: {visitedFlags.length}</h3>
            <ol>
                {
                    visitedCountries.map(country => <li
                    key={country.cca3.cca3}>
                        {country.name.common}
                        </li>) 
                }
            </ol>
            
            <div className='visited-flags'>
                {
                    visitedFlags.map(flag => <img key={flag} src={flag} alt="Visited Flag" />)
                }
            </div>

            <div className='countries'>
                {
                countries.map(country => <Country 
                    key= {country.cca3.cca3}
                    country={country} 
                    handleVisitedCountries= {handleVisitedCountries}
                    handleVisitedFlags= {handleVisitedFlags}>
                    </Country>)
                    
            }

            </div>
        </div>
    );
};

export default Countries;