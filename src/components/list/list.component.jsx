import React from 'react';
import './list.styles.scss';

class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeButton: false,
        }

    }
    render(props) {
        return (
            // <div className="row">
            <tr className={`${this.props.color} table-flex`}>
                <td><button className="btn mr3"></button>{this.props.title}</td>
                <td><p>{this.props.normal}</p></td>
                <td><p>{this.props.premium}</p></td>
            </tr>
            // </div>
            // <div>
            //     <div className="row ml4">
            //     <button className="btn w-0">+</button>
            //     <h5 className="title w-40 ml2">{this.props.title}</h5>
            //     <h5 className="normal w-20">{this.props.normal}</h5>
            //     <h5 className="premium w-20">{this.props.premium}</h5>
            //     </div>
            //     <div>
            //     <p className="content w-100 shadow-5">{this.props.content}</p>
            //     </div>
            // </div>
        )
    }
}
export default List;