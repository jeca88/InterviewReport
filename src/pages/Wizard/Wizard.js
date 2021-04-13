import './Wizard.scss';
import React, { useState, useContext } from 'react'
import { candidatesContext, reportsContext } from '../../App';
import SelectCandidate from '../../components/SelectCandidate/SelectCandidate'
import SelectCompany from '../../components/SelectCompany/SelectCompany'
import FillReportDetails from '../../components/FillReportDetails/FillReportDetails'
import StatusPage from '../../components/StatusPage/StatusPage'
import { Link } from 'react-router-dom'

const Wizard = (props) => {

    const { candidates, filteredCandidates, setFilteredCandidates } = useContext(candidatesContext);
    const { setReports } = useContext(reportsContext)

    const [step, setStep] = useState(1)
    const [name, setName] = useState("")
    const [company, setCompany] = useState("")
    const [infoReport, setInfoReport] = useState({ interviewDate: new Date(), phase: "", status: "", notes: "" });
    const [clickedCandidate, setClickedCandidate] = useState(null);
    const [clickedCompany, setClickedCompany] = useState(null);

    const token = localStorage.getItem('token')

    const handleChangeCandidate = (name, index) => {
        setName(name);
        setClickedCandidate(index);
    }

    const handleChangeCompany = (company, index) => {
        setCompany(company);
        setClickedCompany(index);
    }

    const nextStep = () => {
        setStep(step + 1)
    };

    const prevStep = () => {
        setStep(step - 1)
    };

   
    const submitForm = () => {
        const url = "http://localhost:3333/api/reports/";
        fetch(url, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`,
            },
            body: JSON.stringify({
                candidateName: name,
                companyName: company,
                interviewDate: infoReport.interviewDate,
                phase: infoReport.phase,
                status: infoReport.status,
                note: infoReport.notes
            })

        }).then(response => {
            setReports(null);
            if (response.ok) {
                setStep(step + 1)
            }
        });
    }


    const switchSections = () => {
        switch (step) {
            case 1:
                return (<SelectCandidate candidates={candidates}
                    nextStep={nextStep} handleChange={handleChangeCandidate} clickedItem={clickedCandidate}
                    filteredCandidates={filteredCandidates}
                    setFilteredCandidates={setFilteredCandidates}
                />)
            case 2:
                return (<SelectCompany nextStep={nextStep} prevStep={prevStep}
                    handleChange={handleChangeCompany} clickedItem={clickedCompany}/>)
            case 3:
                return (<FillReportDetails prevStep={prevStep} setInfoReport={setInfoReport}
                    infoReport={infoReport} submitForm={submitForm} />)
            case 4:
                return (<StatusPage />)
            default:
                return (console.log("Successful"))
        }
    }

    return (
        <>
            <div className="Header">
                <div className="Logo">Interview Reports</div>
                <Link className="login-btn" to='./reports'>Reports</Link>
            </div>
            <div className="Container-Page">
                <div className="Navigator-Page">
                    <div className='page-status'>
                        <h3 className={step === 1 ? "Active" : ""}><span>1</span>Select Candidate</h3>
                        <h3 className={step === 2 ? "Active" : ""}><span>2</span>Select Company</h3>
                        <h3 className={step === 3 ? "Active" : ""}><span>3</span>Fill Report Details</h3>
                    </div>
                    <div className="State-Status">
                        {name ? <div>
                            <h6> Candidate: </h6>
                            <p>{name}</p>
                        </div> : ''
                        }
                        {company ? <div>
                            <h6>Company: </h6>
                            <p>{company}</p>
                        </div> : ""
                        }
                    </div>
                </div>
                <div className="Switch">
                    {switchSections()}
                </div>
            </div>
        </>)
}


export default Wizard;