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
    <div className="wrapper">
      <h2>High Scores per Country</h2>
      {allCountryScores.map((country) => (
        <HighScoreTable country={country} />
      ))}
    </div>
  );
};

//map through scores arr
//for each row renders name & score
//pass name & score as 2 different props in PlayerScore component
//Use props in playerscore to rnder row

const HighScoreTable = ({ country }) => {
  return (
    <div className="country-div">
      <h3>High Scores: {country.name}</h3>
      <table>
        <tbody>
          {/*Map scores arr, render PlayerScore row for each player. Name & score props created to access n & s values  */}
          {country.scores.map((score) => (
            <PlayerScore name={score.n} score={score.s} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

//name & score props passed, both values will render in own td (1 tr)
const PlayerScore = ({ name, score }) => {
  return (
    <tr>
      <th scope="row"></th>
      <td>{name}</td>
      <td>{score}</td>
    </tr>
  );
};

export default AllTables;
