import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './VoteAdmin.css';

function VoteAdmin() {
  const addressAPI = 'http://localhost:8000';

  const [vote, setVote] = useState({
    nameAdd: '',
    nameDelete: '',
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

  // POST question/réponse du formulaire à la BDD
  const submitNewRegion = (event) => {
    event.preventDefault();
    axios.post(`${addressAPI}/vote/`, {
      name: vote.nameAdd,
    });
  };

  // DELETE route : supprime la Region selon le name entré dans le formulaire
  const deleteRegion = (event) => {
    console.log(event.target.value)
    event.preventDefault();
    axios.delete(`${addressAPI}/vote/`, {
      name: vote.nameDelete,
    });
  };

  return (
    <div>
      <h1>Vote Admin</h1>
      <form onSubmit={submitNewRegion} className="faqAdminForm">
        <div className="form-group faqAdminForm">
          <label className="faqAdminForm" htmlFor="newName">
            <p>Region's name to add :</p>
            <input
              className="formInput"
              type="text"
              value={vote.nameAdd}
              onChange={(event) => setVote({ ...vote, nameAdd: event.target.value })}
              id="newName"
              required
            />
          </label>
        </div>
        <div className="form-group faqAdminForm">
          <button type="submit" className="btn btn-primary">Add</button>
        </div>
      </form>
      <form onSubmit={deleteRegion} className="faqAdminForm">
        <div className="form-group faqAdminForm">
          <label className="faqAdminForm" htmlFor="deleteName">
            <p>Region's name to delete :</p>
            <input
              className="formInput"
              type="text"
              value={vote.nameDelete}
              onChange={(event) => setVote({ ...vote, nameDelete: event.target.value })}
              id="deleteName"
              required
            />
          </label>
          <button type="submit" className="btn btn-danger">Supprimer</button>
        </div>
      </form>
      <div className="cards">
        {vote.listRegion.map((data) => (
          <div className="itemRegion" key={data.id}>
            <div className="card border-info mb-3">
              <div className="card-header">
                <p>
                  Region's name :
                  {data.regionName}
                </p>
                <p>Vote Count </p>
                {data.voteCount}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default VoteAdmin;
