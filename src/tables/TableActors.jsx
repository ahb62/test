import React from "react";
// import { Table } from "react-bootstrap";
// import swapiModule from "../controllers";
import axios from "axios";


// const actors = (swapiModule.getPeople()).filter(actor => actor.results);

let actors = [];
// let firstDimensionOfActors = [];


const gettingPeople = () =>
{
    let apiURL = "https://swapi.dev/api/people";
    axios.get(apiURL).then( (response) =>  actors.push(response.data) );

}

    // firstDimensionOfActors = actors.filter(actor => actor === actor[0]);
   // console.log(actors[0]);
    // console.log(firstDimensionOfActors);
    
    console.log(actors);

const TableActors = () => 
{
    
    return(
        <>
            <h1>Actors</h1>   
            {gettingPeople()}
        </>
    )
}
export default TableActors;