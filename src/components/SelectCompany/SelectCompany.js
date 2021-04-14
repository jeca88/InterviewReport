import './SelectCompany.scss';
import { useEffect, useState } from 'react';

const SelectCompany = ({ nextStep, prevStep, handleChange, clickedItem }) => {
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
                {company.map((e, index) => {
                    return <li onClick={() => handleChange(e.name,index)} 
                    className={index === clickedItem ? 'activeItem' : null}
                    key={e.id}>{e.name}</li>})
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