import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Vote.css';
const requestIp = require('request-ip');

function Vote() {
  const addressAPI = 'http://localhost:8000';

  const [vote, setVote] = useState({
    nameVote: '',
    listRegion: [],
  });

    // FETCH API pour récupéré la liste des Regions
    useEffect(() => {
      axios.get(`${addressAPI}/vote/`)
        .then((result) => {
          const newList = vote.listRegion.concat(result.data);
          setVote({ ...vote, listRegion: newList });
        });
    }, []);

    const handleVote = (param) => {
      const voteName = param.regionName
      axios.put(`${addressAPI}/vote/`, {
        name: param.regionName,
      })
      // .then(axios(requestIp.getClientIp)
      // .then((result) => console.log(result))
      // );
    };

  return (
    <div className="Vote">
      <h2>Vote for next mounth's destination !</h2>
      <div className="cards">
        {vote.listRegion.map((data) => (
          <div className="itemRegion" key={data.id}>
            <div className="card border-info mb-3">
              <div className="card-header">
                <button onClick={() => handleVote(data) } className="rounded-circle voteButton" type="sumbit" />
                {data.regionName}
                <span>: </span>
                {data.voteCount}
                <span> votes </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Vote;

