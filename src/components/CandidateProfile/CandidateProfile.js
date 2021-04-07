import './CandidateProfile.scss';
import React, { useContext } from 'react'
import { Link } from 'react-router-dom';



const CandidateProfile = ({ candidate }) => {

    return (
        <div className="Profile">
            <Link to={`/candidate/${candidate.id}`}>
                <img src={candidate.avatar} />
                <div>
                    <h4>{candidate.name}</h4>
                    <p>{candidate.email}</p>
                </div>
            </Link>
        </div >
    )
}

export default CandidateProfile;