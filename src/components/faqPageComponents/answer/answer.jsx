import React from 'react';
import './answer.scss';

const Answer = ({ text }) => {
    return (
        <div className="faq-answer">
            <p>{text}</p>
        </div>
    );
};

export default Answer;