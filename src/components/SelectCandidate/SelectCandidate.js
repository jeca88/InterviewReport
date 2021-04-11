import './SelectCandidate.scss';
import Search from '../../components/Search/Search';


const SelectCandidate = ({ candidates, nextStep, handleChange, filteredCandidates, setFilteredCandidates }) => {

    const filters = ['name'];

    
  const updateFilteredCandidates = (filtered) => {
    setFilteredCandidates(filtered);
  }

    return (
        <>
           <Search items={candidates}
           filters = {filters} 
           updateResults={updateFilteredCandidates}/>
            <div className="Candidate-Wrapper">
                {filteredCandidates.map(e =>
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