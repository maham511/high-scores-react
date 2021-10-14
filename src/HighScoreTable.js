/* eslint-disable comma-dangle */
/* eslint-disable no-trailing-spaces */
import React from "react";
import allCountryScores from "./scores";

//table with country name as heading
//list of players and scores

//PlayerScore = tr elem
//<PlayerScore/>

//Need to create highscoretable for reach elem in Scores arr
// allCountryScores.map(country => {return all of country-div contents})

console.log(allCountryScores); //logs arr of 8 obj elems

const AllTables = () => {
return (
    <div class='wrapper'>
    <h2>High Scores per Country</h2>
   {allCountryScores.map((country) => (
     <HighScoreTable country={country}/>
   )   
  )}
  </div>
);
};

//map through scores arr
//for each row renders name & score
//pass name & score as 2 different props in PlayerScore component
//Use props in playerscore to rnder row

const HighScoreTable = (props) => {
  return (
    <div className="country-div">
      <h3>High Scores: {props.country.name}</h3>
      <table>
        <tbody>
          <PlayerScore name={}/>
        </tbody>
      </table>
    </div>
  );
};

const PlayerScore = (props) => {
  return (
    <tr>
      <th scope="row"></th>
      <td>{}</td>
      <td>{}</td>
    </tr>
  );
};

export default AllTables;
