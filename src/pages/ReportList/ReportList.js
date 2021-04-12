import './ReportList.scss';
import React, { useEffect, useState, useContext } from 'react';
import Report from '../../components/Report/Report';
import { Link, Redirect } from 'react-router-dom';
import { reportsContext } from '../../App';
import Search from '../../components/Search/Search';

const ReportList = (props) => {
    const { reports, setReports, setFilteredReports, filteredReports } = useContext(reportsContext);


    const filters = ['candidateName', 'companyName'];
    const token = localStorage.getItem('token');
    console.log('hi', token)


    const logOut = () => {
        localStorage.setItem('token', "");

    }

    const updateFilteredReports = (filtered) => {
        setFilteredReports(filtered);
    }

    return (
        <div className="reportList">
            {token == '' && <Redirect to='/login'></Redirect>}
            <div className="Header">
                <div className="Logo">Interview Reports</div>
                <div className='btns'>
                    <Link className="logOut" to="/" onClick={logOut}>Log Out</Link>
                    <Link className="newReport-btn" to='/new-report'>Create Report</Link>
                </div>
            </div>
            <div className="report-content">
                < Search items={reports} filters={filters}
                    updateResults={updateFilteredReports} />
                <div className="report">
                    {filteredReports && filteredReports.map(rep => <Report report={rep} setReports={setReports} />)}
                </div>

            </div>
        </div>
    )
}

export default ReportList;