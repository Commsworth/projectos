import React from 'react';

import './search-box.styles.css';


export const SearchBox = ({ placeholder, handleChange }) => (
<div>
<div className="search-container">
        <input
            className = 'search'
            type="search"
            placeholder = {placeholder}
            />
        <button className="get-demo">
            Get Demo
        </button>
    </div>
</div>    
)