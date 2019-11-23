import React, {useState, useEffect} from "react";
import axios from "axios";
import SWCard from "./SWCard";


export default function SWData() {
    const [characters, setCharacters] = useState([]);

useEffect(() => {
    axios
    .get("https://swapi.co/api/people/")
    .then(response => {
        console.log(response.data.results);
        setCharacters(response.data.results);
    })
    .catch(error => {
        console.log("There is an error", error);
    
    });
}, []);

return (
    <div className="characters">
        {characters.map(char => {
            return (
                 <SWCard
                    key={char.id}
                    name={char.name}
                    gender={char.gender}
                    height={char.height}
                    weight={char.mass}
                    birth_year={char.birth_year}
                 />  
            );
        })}
    </div>
);
}
   