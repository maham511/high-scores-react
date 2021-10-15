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
    <div className='wrapper'>
      <h2>High Scores per Country</h2>
      {allCountryScores.map((countryInfo) => (
      <HighScoreTable countryInfo={countryInfo}/>
    )   
    )}
    </div>
);
};

//map through scores arr
//for each row renders name & score
//pass name & score as 2 different props in PlayerScore component
//Use props in playerscore to rnder row

const HighScoreTable = ({ countryInfo }) => {
  
    console.log(countryInfo.scores);
  
  return (
    <div className="country-div">
      <h3>High Scores: {countryInfo.name}</h3>
      <table>
        <tbody>
          {/*Maps through scores arr, renders playerscore row for each player  */}
          {countryInfo.scores.map((playerScore) => (
            <PlayerScore name={playerScore.n} score={playerScore.s} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

const PlayerScore = ({ name, score }) => {
  return (
    <tr>
      <th scope="row"></th>
      <td>{name}</td>
      <td>{score}</td>
    </tr>
  );
};

// const HighScoreTable = (props) => {
//   return (
//     <div className="country-div">
//       <h3>High Scores: {props.countryInfo.name}</h3>
//       <table>
//         <tbody>
//           <PlayerScore name={} score={}/>
//         </tbody>
//       </table>
//     </div>
//   );
// };

// const PlayerScore = (props) => {
//   return (
//     <tr>
//       <th scope="row"></th>
//       <td>{props.}</td>
//       <td>{props.}</td>
//     </tr>
//   );
// };

export default AllTables;
