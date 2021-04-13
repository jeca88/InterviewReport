import { useState } from 'react';
import './SelectCompany.scss';
import { useEffect } from 'react';

const SelectCompany = ({ nextStep, prevStep, handleChange }) => {
    const [company, setCompany] = useState([]);

    useEffect(() => {
        const url = "http://localhost:3333/api/companies";
        fetch(url)
            .then(response => response.json())
            .then(data => setCompany(data));
    }, []);

    return (
        <div className="select">
            <ul>
                {company.map(e => {
                    return <li onClick={() => handleChange(e.name)} key={e.id}>{e.name}</li>
                })
                }
            </ul>
            <div className="btns">
                <button className="prev" onClick={prevStep}>Previous</button>
                <button className="next" onClick={nextStep} >Next</button>
            </div>
        </div>
    )
}

export default SelectCompany;