// import arrow from '../../../asset/svg/arrow.svg';

class Card extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            link: false,
        }
    }
    render() {
        return (

            <div className="card" style={{width: this.props.width, minWidth: this.props.minWidth, background: `url(${this.props.background})`, backgroundSize: "cover"}}>
                <h3 className="title">
                    {this.props.title}
                </h3>
                <h3>
                    {this.props.subTitle}
                </h3>
                <p>
                    {this.props.content}
                </p>
                <p>
                    {this.props.content2}
                </p>
                <a>
                    {this.props.link}
                </a>

                <style jsx global>{
                    `.card{
                        box-shadow: 0px 0px 1px 0px;
                        outline: transparent;
                        padding: 1vw;
                        width: 100%;
                        height: 100%;
                        color: white;
                        background: transparent;
                        display: flex;
                        // align-content: center;
                        justify-content: center;
                        flex-direction: column;
                    }

                    .card h3{
                        font-size: 36px;
                        margin: 5px 0px;
                    }

                    .card    p{
                        // color: white;
                        font-size: 15px;
                    }

                    .card    a{
                        cursor: pointer;
                        text-align: right;
                    }                
                      `
                }

                </style>
            </div>
        )
    }



}

export default Card;