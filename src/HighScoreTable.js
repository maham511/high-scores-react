import React from "react";
import allCountryScores from "./scores";

//table with country name as heading
//list of players and scores

//PlayerScore = tr elem
//<PlayerScore/>

//Need to create highscoretable for reach elem in Scores arr
  // allCountryScores.map(country => {return all of country-div contents})

  console.log(allCountryScores); //logs arr of 8 obj elems

const HighScoreTable = () => {
  return (
    <div className="country-div">
      <h3>High Scores: {allCountryScores[0].name}</h3>
      <table>
        <tbody>
          {/* <tr>
            <th scope="row"></th>
            <td>{allCountryScores[0].scores[0].n}</td>
            <td>{allCountryScores[0].scores[0].s}</td>
          </tr> */}
          <PlayerScore/>
        </tbody>
      </table>
    </div>
  );
};

const PlayerScore = () =>{
  return (
    <tr>
      <th scope="row"></th>
      <td>{allCountryScores[0].scores[0].n}</td>
      <td>{allCountryScores[0].scores[0].s}</td>
    </tr>
  );
};

export default HighScoreTable;
