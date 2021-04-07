import './CandidateDetails.scss';
import React, { useContext } from 'react'
import { candidatesContext } from '../../App';
import { reportsContext } from '../../App'

const CandidateDetails = (props) => {
    const candidateDetail = useContext(candidatesContext);
    const reportsDetail = useContext(reportsContext);

    const profile = candidateDetail.find(e => e.id == props.match.params.id);
    const reportsData = reportsDetail.filter(e => e.candidateId == profile.id);
    console.log(reportsData)

    return (
        <div className="CandidateDetails">
            <img src={profile.avatar} />
            <div>
                <h3>Name:{profile.name}</h3>
                <h3>Email:{profile.email}</h3>
            </div>
            <div>
                <h3>Date of Birth:{profile.birthday}</h3>
                <h3>Education:{profile.education}</h3>
            </div>

            <div className="Table">
                <h3>Reports</h3>
            </div>
            <table className="TableGrid">
                <tr>
                    <th>Company</th>
                    <th>Inteview date</th>
                    <th colspan="2">Status</th>
                </tr>
                {reportsData.map(e =>
                    <tr>
                        <td>{e.companyName}</td>
                        <td>{e.interviewDate}</td>
                        <td>{e.status}</td>
                    </tr>)}

            </table>
        </div>
    )
}

export default CandidateDetails;