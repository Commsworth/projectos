import React from 'react';
import './faq-dropdown.styles.scss';
import { plusSign, minusSign } from '../../svgs/commsworth';


class FAQDropdown extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: false,
        }
    }

    render(props) {
        const { title, content } = this.props;
        return (
            <div className="faq-dropdown">
                <div className="faq-dropdown-flex">
                    <div className="collapsible">
                        <p onClick={() => !this.state.title ? this.setState({ title: true }) : this.setState({ title: false })}>{!this.state.title && <span>+  </span>}{this.state.title && <span>-  </span>}{title}</p>
                        {this.state.title && <small>{content}</small>}
                    </div>
                </div>
            </div>
        )
    }
}
export default FAQDropdown;