import './FillReportDetails.scss';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'
import { useState } from 'react';

const FillReportDetails = ({ prevStep, setInfoReport, infoReport, submitForm }) => {

    const { interviewDate, status } = infoReport;

    const DatePick = () => {

        return (<DatePicker selected={interviewDate} onChange={date => setInfoReport({ ...infoReport, interviewDate: date })} />
        )
    }
    return (
        <div className="reports-cnt">
            <div className="reports-selects">
                <div className='date'>
                    <p>Interview Date</p>
                    {DatePick()}
                </div>
                <div className='phase'>
                    <p>Phase</p>
                    <select onChange={e => setInfoReport({ ...infoReport, phase: e.target.value })}>
                        <option value='cv'>cv</option>
                        <option value='hr'>hr</option>
                        <option value='technical'>technical</option>
                        <option value='final interview'>final interview</option>
                    </select>
                </div>
                <div className='status' >
                    <p>Status</p>
                    <select onChange={e => setInfoReport({ ...infoReport, status: e.target.value })}>
                        <option value='passed' >passed</option>
                        <option value='decline'>decline</option>
                    </select>
                </div>
            </div>
            <div className='notes'>
                <textarea onChange={e => setInfoReport({ ...infoReport, notes: e.target.value })}></textarea>
            </div>
            <div className="btns-cnt">
                <button className="prev" onClick={prevStep}>Prev</button>
                <button className="submit" onClick={submitForm}>Submit</button>
            </div>
        </div>
    )
}

export default FillReportDetails;