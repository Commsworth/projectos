import React, { useState } from 'react';
import './question.scss';
import plus from '../images/plus.svg';
import minus from '../images/minus.svg';
import Answer from '../answer/answer';

const Question = ({ text, answer }) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleOpen = () => {
        if (isOpen) {
            return setIsOpen(false);
        }
        return setIsOpen(true);
    }
    return (
        <div className="faq-question" onClick={ toggleOpen}>
            <section className="faq-question-top">
                {!isOpen && <img src={plus} alt="plus" />}
                {isOpen && <img src={minus} alt="minus" />}
                <h3>{text}</h3>
            </section>
            {isOpen && <section className="faq-question-bottom">
                <Answer text={answer} />
            </section>}
        </div>
    );
};

export default Question;