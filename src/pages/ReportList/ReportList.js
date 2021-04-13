import './ReportList.scss';
import React, { useContext } from 'react';
import Report from '../../components/Report/Report';
import { Link, Redirect } from 'react-router-dom';
import { reportsContext } from '../../App';
import Search from '../../components/Search/Search';

const ReportList = (props) => {
    const { reports, setReports, setFilteredReports, filteredReports, setToken, token } = useContext(reportsContext);

    const filters = ['candidateName', 'companyName'];
    // const token = localStorage.getItem('token');
    // console.log('hi', token)


    const logOut = () => {
        localStorage.setItem('token', "");
        setToken("");
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
            <div className='arrow-back'>
                <Link to="/"><i className="fas fa-arrow-left"></i></Link>
            </div>
            <div className="report-content">
                < Search items={reports} filters={filters}
                    updateResults={updateFilteredReports} />
                <div className="report">
                    {filteredReports && filteredReports.map(rep => <Report report={rep} setReports={setReports} token={token} />)}
                </div>
            </div>
        </div>
    )
}

export default ReportList;