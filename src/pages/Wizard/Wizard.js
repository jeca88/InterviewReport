import './Wizard.scss';
import React, { useState, useContext } from 'react'
import { candidatesContext } from '../../App';
import SelectCandidate from '../../components/SelectCandidate/SelectCandidate'
import SelectCompany from '../../components/SelectCompany/SelectCompany'
import FillReportDetails from '../../components/FillReportDetails/FillReportDetails'
import { Link } from 'react-router-dom'

const Wizard = (props) => {

    const candidates = useContext(candidatesContext);


    const [step, setStep] = useState(1)
    const [name, setName] = useState("")
    const [company, setCompany] = useState("")
    const [infoReport, setInfoReport] = useState({ interviewDate: new Date(), phase: "", status: "", notes: "" });

    const token = localStorage.getItem('token')

    const nextStep = () => {
        setStep(step + 1)
    };

    const prevStep = () => {
        setStep(step - 1)
    };

    const submitForm = () => {
        const url = "http://localhost:3333/api/reports/";
        const id = "789658744";
        fetch(url, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`,
            },
            body: JSON.stringify({
                id: id,
                candidateName: name,
                companyName: company,
                interviewDate: infoReport.interviewDate,
                phase: infoReport.phase,
                status: infoReport.status,
                note: infoReport.notes
            })

        }).then(response => console.log(response))
    }



    const switchSections = () => {
        switch (step) {
            case 1:
                return (<SelectCandidate candidates={candidates} nextStep={nextStep} handleChange={setName} />)
            case 2:
                return (<SelectCompany nextStep={nextStep} prevStep={prevStep} handleChange={setCompany} />)
            case 3:
                return (<FillReportDetails prevStep={prevStep} setInfoReport={setInfoReport} infoReport={infoReport} submitForm={submitForm} />)
            default:
                return (console.log("Succesfull"))
        }
    }

    return (<>
        <div className="Header">
            <div className="Logo">Interview Reports</div>
            <Link className="login-btn" to='./reports'>Reports</Link>
        </div>
        <div className="Container-Page">
            <div className="Navigator-Page">
                <h3>Select Candidate</h3>
                <h3>Select Company</h3>
                <h3>Fill Report Details</h3>
            </div>
            <div className="Switch">
                {switchSections()}
            </div>
        </div>
    </>)
}



export default Wizard;