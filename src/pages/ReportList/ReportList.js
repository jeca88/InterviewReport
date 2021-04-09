import './ReportList.scss';
import React, { useEffect, useState } from 'react';
import Report from '../../components/Report/Report';
import { Link } from 'react-router-dom';

const ReportList = (props) => {

    const [reports, setReports] = useState([]);

    useEffect(() => {
        const url = "http://localhost:3333/api/reports";
        fetch(url)
            .then(response => response.json())
            .then(data => setReports(data));
    }, []);


    return (
        <>
            <div className="Header">
                <div className="Logo">Interview Reports</div>
                <Link className="newReport-btn" to='/new-report'>Create Report</Link>
            </div>
            <div className="ReportList">
                {reports.map(rep => <Report report={rep} />)}
            </div>
        </>
    )
}

export default ReportList;