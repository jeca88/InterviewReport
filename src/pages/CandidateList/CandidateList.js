import React, { useContext } from "react";
import "./CandidateList.scss";
import CandidateProfile from "../../components/CandidateProfile/CandidateProfile";

import { Link } from "react-router-dom";

import { candidatesContext } from "../../App";

const CandidateList = (props) => {
  const candidates = useContext(candidatesContext);

  return (
    <>
      <div className="Header">
        <div className="Logo">Interview Reports</div>
        <Link className="login-btn" to="./login">
          Log in
        </Link>
      </div>
      <div className="CandidateContainer">
        <div className="CandidatesSearch">
          <h2>Candidates</h2>
          <input className="SearchOne" />
        </div>
        <div className="CandidateWrapper">
          {candidates &&
            candidates.map((candidate) => (
              <CandidateProfile candidate={candidate} />
            ))}
        </div>
      </div>
    </>
  );
};

export default CandidateList;
