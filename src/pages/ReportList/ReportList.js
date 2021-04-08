import './ReportList.scss';
import React, { useContext } from 'react'
import { reportsContext } from '../../App';
import Report from '../../components/Report/Report';
import { Link } from 'react-router-dom';

const ReportList = (props) => {

    const reports = useContext(reportsContext);

    return (
        <>
            <div className="Header">
                <div className="Logo">Interview Reports</div>
                <Link className="newReport-btn" to='/newReport'>Create Report</Link>
            </div>
            <div className="ReportList">
                {reports.map(rep => <Report report={rep} />)}
            </div>
        </>
    )
}

export default ReportList;