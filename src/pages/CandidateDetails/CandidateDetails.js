import './CandidateDetails.scss';
import React, { useContext, useState } from 'react'
import { candidatesContext } from '../../App';
import { reportsContext } from '../../App'
import Modal from '../../components/Modal/Modal';
import { Link } from 'react-router-dom';

const CandidateDetails = (props) => {
    const candidates = useContext(candidatesContext);
    const reportsDetail = useContext(reportsContext);

    const [modal, setModal] = useState(false);
    const [report, setReport] = useState(null);

    const profile = candidates.find(e => e.id == props.match.params.id);
    const reportsData = reportsDetail.filter(e => e.candidateId == profile.id);

    const showModal = (rep) => {
        setModal(!modal);
        setReport(rep);
    }

    const closeModal = () => {
        setModal(false);
    }

    const getRealDate = (e) => {
        let realDate = new Date(e);
        let date = realDate.getDate();
        let month = realDate.getMonth() + 1;
        let year = realDate.getFullYear();

        return (`${date}.${month < 10 ? `0${month}` : `${month}`}.${year}`)
    }
    if (!profile) {
        return null
    }
    return (
        <>
            <div className="Header">
                <div className="Logo">Interview Reports</div>
                <Link className="back-btn" to='/'>Back</Link>
            </div>

            <div className="CandidateDetails">
                <img src={profile.avatar} />
                <div>
                    <h3>Name: {profile.name}</h3>
                    <h3>Email: {profile.email}</h3>
                </div>
                <div>
                    <h3>Date of Birth: {getRealDate(profile.birthday)}</h3>
                    <h3>Education:{profile.education}</h3>
                </div>

                <div className="Table">
                    <h3>Reports</h3>
                </div>
                <table className="TableGrid">
                    <tr>
                        <th>Company</th>
                        <th>Inteview date</th>
                        <th colSpan="2">Status</th>
                    </tr>
                    {reportsData.map(e =>
                        <tr>
                            <td>{e.companyName}</td>
                            <td>{getRealDate(e.interviewDate)}</td>
                            <td>{e.status}</td>
                            <td><span onClick={() => showModal(e)}>M</span></td>
                        </tr>)}
                </table>
                <Modal modal={modal}
                    reportsData={report}
                    handleClose={closeModal}
                    getRealDate={getRealDate} />
            </div>
        </>
    )
}

export default CandidateDetails;