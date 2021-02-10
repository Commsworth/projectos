import React from 'react';
import './demo.scss';

const Demo = () => {
    return (
        <div className="demo">
            <section className="demo-input">
            <input type="text" placeholder="Email Address"/>
            </section>
            <button>Get demo</button>
        </div>
    );
};

export default Demo;