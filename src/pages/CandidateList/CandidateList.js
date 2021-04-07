import React, { useContext } from 'react'
import './CandidateList.scss';
import CandidateProfile from '../../components/CandidateProfile/CandidateProfile'

import { candidatesContext } from '../../App'


const CandidateList = (props) => {

    const candidates = useContext(candidatesContext)

    return (

        <div className="CandidateContainer">
            <div className="CandidatesSearch">
                <h2>Candidates</h2>
                <input className="SearchOne" />
            </div>
            <div className="CandidateWrapper">
                {candidates && candidates.map(candidate => <CandidateProfile candidate={candidate} />)}
            </div>

        </div>

    )
}

export default CandidateList;