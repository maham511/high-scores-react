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

  // function to sort allCountryScores arr alphabetically using name property value
  function compare(a, b) {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  }
  const sortedCountriesArr = allCountryScores.sort(compare);

  return (
    <div className="wrapper">
      <h2>High Scores per Country</h2>
      {sortedCountriesArr.map((country, index) => (
        <HighScoreTable country={country} key={index} />
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
          {/*Scores arr sorted in descending order of s property values, then mapped to render PlayerScore row for each player. Name & score props created to access n & s values  */}
          {country.scores
            .sort((a, b) => b.s - a.s)
            .map((score, index) => (
              <PlayerScore name={score.n} score={score.s} key={index} />
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
