import React from "react";

//table with country name as heading
//list of players and scores

//PlayerScore = tr elem
//<PlayerScore/>

const HighScoreTable = () => {
  return (
    <div class="country-div">
      <h3>High Scores: Bangladesh</h3>
      <table>
        <tbody>
          <tr>
            <th scope="row"></th>
            <td>Mark</td>
            <td>106</td>
          </tr>
          <tr scope="row">
            <th scope="row"></th>
            <td>Ali</td>
            <td>197</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

// const PlayerScore = ()

export default HighScoreTable;
