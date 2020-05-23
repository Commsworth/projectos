// import arrow from '../../../asset/svg/arrow.svg';

import Link from "next/link";

class Card extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            link: false,
        }
    }
    render() {
        return (

            <div className="card" style={{ background: `url(${this.props.background})`, backgroundColor:this.props.backcolour, backgroundSize: "cover" }}>
                <h3 className="title">
                    {this.props.title}
                </h3>
                <h3 className="sub-title">
                    {this.props.subTitle}
                </h3>
                <p>
                    {this.props.content}
                </p>
                <p>
                    {this.props.content2}
                </p>
                <Link href="#">
                    <h3 className="link">
                        {this.props.link}
                    </h3>
                </Link>

                <style jsx global>{
                    `.card{
                        box-shadow: 0px 0px 0px 0px;
                        outline: transparent;
                        padding: 1vw;
                        width: 100%;
                        height: 100%;
                        color: white !important;
                        background: transparent;
                        display: flex;
                        align-content: center;
                        background-position: center !important;
                        background-size: cover !important;
                    }

                    .card h3{
                        font-size: 36px;
                        margin: 0px 0px;
                    }

                    .card    p{
                        // color: white;
                        font-size: 15px;
                    }

                    .card    a{
                        cursor: pointer;
                        text-align: right;
                    }  
                    .card .link{
                        cursor: pointer;
                        width: fit-content;
                        color: #208FFF;
                    }              
                      `
                }

                </style>
            </div>
        )
    }



}

export default Card;