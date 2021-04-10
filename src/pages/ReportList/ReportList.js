import './ReportList.scss';
import React, { useEffect, useState, useContext } from 'react';
import Report from '../../components/Report/Report';
import { Link } from 'react-router-dom';
import { reportsContext } from '../../App'

const ReportList = (props) => {

    const { reports, setReports } = useContext(reportsContext)

    return (
        <>
            <div className="Header">
                <div className="Logo">Interview Reports</div>
                <Link className="newReport-btn" to='/new-report'>Create Report</Link>
            </div>
            <div className="ReportList">
                {reports && reports.map(rep => <Report report={rep} setReports={setReports} />)}
            </div>
        </>
    )
}

export default ReportList;