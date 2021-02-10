import React from 'react';
import './selectMenu.scss';

const SelectMenu = () => {
    return (
        <section className="select-menu">
            <button>Budget Tracking</button>
            <button>Project Tracking</button>
            <button>Geo-Tracking</button>
            <button>Contract Manager</button>
            <button>Performance Insights</button>
        </section>
    );
};

export default SelectMenu;