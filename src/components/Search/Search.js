import React, { useEffect, useState } from 'react';
import './Search.scss';

var _ = require('lodash');

const Search = ({ items, filters, updateResults }) => {

    const [searchValue, setSearchValue] = useState('');

    const isMatched = (item) => {
        for (var i = 0; i < filters.length; i++) {
            const val = _.get(item, filters[i]);

            if (val && val.toLowerCase().includes(searchValue.toLowerCase())) {
                return true;
            }
        }
        return false;
    }

    useEffect(() => {
        if (items) {
            const filteredItems = items.filter(item => {
                return isMatched(item);
            })

            updateResults(filteredItems);
        }
    }, [searchValue])


    return (
        <div className='search'>
            <input value={searchValue} onChange={e => setSearchValue(e.target.value)} />
            <i className="fas fa-search"></i>
        </div>
    )
}

export default Search;