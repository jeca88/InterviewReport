import "./CandidateDetails.scss";
import React, { useContext, useState } from "react";
import { candidatesContext } from "../../App";
import { reportsContext } from "../../App";
import Modal from "../../components/Modal/Modal";
import { Link } from "react-router-dom";

const CandidateDetails = (props) => {
  const candidates = useContext(candidatesContext);
  const { reports, setReports } = useContext(reportsContext);

  const [modal, setModal] = useState(false);
  const [report, setReport] = useState(null);

  const profile = candidates.find(e => e.id == props.match.params.id);
  const reportsData = reports && reports.filter(e => e.candidateId == profile.id);

  const showModal = (rep) => {
    setModal(!modal);
    setReport(rep);
  };

  const closeModal = () => {
    setModal(false);
  };

  const getRealDate = (e) => {
    let realDate = new Date(e);
    let date = realDate.getDate();
    let month = realDate.getMonth() + 1;
    let year = realDate.getFullYear();

    return `${date}.${month < 10 ? `0${month}` : `${month}`}.${year}`;
  };
  if (!profile) {
    return null;
  }
  return (
    <>
      <div className="Header">
        <div className="Logo">Interview Reports</div>
        <Link className="back-btn" to="/">
          Back
        </Link>
      </div>

      <div className="CandidateDetails">
        <div className="Info">
          <img src={profile.avatar} />
          <div>
            <p>Name: </p>
            <h3>{profile.name}</h3>
            <p>Email: </p>
            <h3>{profile.email}</h3>
          </div>
          <div>
            <p>Date of Birth: </p>
            <h3>{getRealDate(profile.birthday)}</h3>
            <p>Education: </p>
            <h3>{profile.education}</h3>
          </div>
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
                    {reportsData && reportsData.map(e =>
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
