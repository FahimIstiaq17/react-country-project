import React from 'react';
import './Country.css';
const Country = ({ country }) => {
    const [visited, setVisited] = React.useState(false);
    // console.log(country);
    const handleVisited = () => {
        // console.log('Button Clicked');
        // mathod 1
        // setVisited(visited ? false : true);

        // mathod 2
        setVisited(!visited);
    }

    return (
        <div className={`country ${visited && 'country-visited'}`}>
            <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
            <h2>Name: {country.name.common} </h2>
            <p>Population: {country.population.population} </p>
            <p>Area: {country.area.area} {country.area.area > 300000 ? '(Large Country)' : '(Small Country)'} </p>
            <button onClick={handleVisited}>
                {visited ? 'Visited' : 'Not Visited'}
            </button>
        </div>
    );
};

export default Country;