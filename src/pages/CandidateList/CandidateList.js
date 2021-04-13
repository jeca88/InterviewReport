import React, { useContext } from "react";
import "./CandidateList.scss";
import CandidateProfile from "../../components/CandidateProfile/CandidateProfile";
import Search from '../../components/Search/Search';
import { Link } from "react-router-dom";

import { candidatesContext } from "../../App";


const CandidateList = (props) => {
  const { candidates, filteredCandidates, setFilteredCandidates } = useContext(candidatesContext);

  const filters = ['name'];

  const token = localStorage.getItem('token');

  const updateFilteredCandidates = (filtered) => {
    setFilteredCandidates(filtered);
  }


  return (
    <>
      <div className="Header">
        <div className="Logo">Interview Reports</div>
        <Link className="login-btn" to="./login">
          {token ? "Reports" : "Log in"}
        </Link>
      </div>
      <div className="CandidateContainer">
        <div className="CandidatesSearch">
          <h2>Candidates</h2>
          <Search items={candidates}
            filters={filters}
            updateResults={updateFilteredCandidates}
          />
        </div>
        <div className="CandidateWrapper">
          {filteredCandidates.map((candidate) => (
            <CandidateProfile candidate={candidate} key={candidate.id} />
          ))}
        </div>
      </div>
    </>
  );
};

export default CandidateList;
