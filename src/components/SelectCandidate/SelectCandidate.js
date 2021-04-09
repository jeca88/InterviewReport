import './SelectCandidate.scss';


const SelectCandidate = ({ candidates, nextStep, handleChange }) => {

    return (
        <>
            <input />
            <div className="Candidate-Wrapper">
                {candidates.map(e =>
                    <div className="Candidate-Content" onClick={() => handleChange(e.name)}>
                        <img src={e.avatar} alt="logo" />
                        <div className="Candidate-Info">
                            <h4>{e.name}</h4>
                            <p>{e.email}</p>
                        </div>
                    </div>
                )
                }
            </div>
            <button onClick={nextStep}>Next</button>
        </>
    )
}

export default SelectCandidate;