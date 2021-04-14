import './SelectCandidate.scss';
import Search from '../../components/Search/Search';



const SelectCandidate = ({ candidates, nextStep, handleChange, filteredCandidates, setFilteredCandidates, clickedItem }) => {
   
    const filters = ['name'];

    const updateFilteredCandidates = (filtered) => {
        setFilteredCandidates(filtered);
    }

    return (
        <>
            <Search items={candidates}
            filters={filters}
            updateResults={updateFilteredCandidates} />
            <div className="Candidate-Wrapper">
                {filteredCandidates.map((e, index) =>
                    <div  className={`Candidate-Content ${index === clickedItem ? 'activeItem' : null}`}
                    onClick={() => handleChange(e.name, index)} key={e.id}>
                        <img src={e.avatar} alt="logo" />
                        <div className="Candidate-Info">
                            <h4>{e.name}</h4>
                            <p>{e.email}</p>
                        </div>
                    </div>
                )
                }
            </div>
            <button className="next" onClick={nextStep}>Next</button>
        </>
    )
}

export default SelectCandidate;