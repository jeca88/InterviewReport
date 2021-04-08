import './ReportList.scss';
import React, { useContext } from 'react'
import { reportsContext } from '../../App';
import Report from '../../components/Report/Report';

const ReportList = (props) => {

    const reports = useContext(reportsContext);

    return (
        <div className="ReportList">
            {reports.map(rep => <Report report={rep} />)}
        </div>
    )
}

export default ReportList;