import './Report.scss';
import React, { useState } from 'react';
import Modal from '../../components/Modal/Modal';

const Report = ({ report, setReports, token }) => {

    // const token = localStorage.getItem('token')
    // console.log(token);

    const [modal, setModal] = useState(false);
    const [reportsData, setReportsData] = useState(null);

    // const token = localStorage.getItem('token');

    const showModal = (rep) => {
        setModal(!modal);
        setReportsData(rep);
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

    const deleteReport = (e) => {
        const url = "http://localhost:3333/api/reports/";
        fetch(url + e.id, {
            method: 'DELETE',
            headers: {
                "Authorization": `Bearer ${token}`,
            },
        })
            .then(response => response.ok && setReports(null));
    }

    return (
        <div className="Report-container" key={report.id}>
            <div className='report-company'>
                <h3>{report.companyName}</h3>
                <p>Company</p>
            </div>
            <div className='report-candidate'>
                <h3>{report.candidateName}</h3>
                <p>Candidate</p>
            </div>
            <div className='report-date'>
                <h3>{getRealDate(report.interviewDate)}</h3>
                <p>Interview Date</p>
            </div>
            <div className='report-status'>
                <h3>{report.status.charAt(0).toUpperCase() + report.status.slice(1)}</h3>
                <p>Status</p>
            </div>
            <div className='report-icon'>
                <span className='eye' onClick={() => showModal(report)} > &#128065;</span>
                <span className='delete' onClick={() => deleteReport(report)}>&#10005;</span>
            </div>
            <Modal handleClose={closeModal}
                reportsData={reportsData}
                modal={modal}
                getRealDate={getRealDate} />
        </div>
    )
}

export default Report;