import './ReportList.scss';
import React, { useEffect, useState, useContext } from 'react';
import Report from '../../components/Report/Report';
import { Link } from 'react-router-dom';
import { reportsContext } from '../../App';
import Search from '../../components/Search/Search';

const ReportList = (props) => {
    const { reports, setReports, setFilteredReports, filteredReports} = useContext(reportsContext);

   
    const filters = ['candidateName', 'companyName'];

    const updateFilteredReports = (filtered) => {
        setFilteredReports(filtered);
      }

    return (
        <div className="reportList">
            <div className="Header">
                <div className="Logo">Interview Reports</div>
                <Link className="newReport-btn" to='/new-report'>Create Report</Link>
            </div>
            <div className="report-content">
                < Search items={reports} filters = {filters} 
                updateResults={updateFilteredReports}/>
                <div className="report">
                    {filteredReports && filteredReports.map(rep => <Report report={rep} setReports={setReports} />)}
                </div>
            </div>
        </div>
    )
}

export default ReportList;