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
        const styleObject = !this.props.background?{ backgroundColor: this.props.backcolour, backgroundSize: "cover" }:{ background:`linear-gradient(rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.35)),url(${this.props.background})`, backgroundSize: "cover" };
        return (

            <div className="card" 
            style={styleObject}
            >
                <h3 className="title">
                    {this.props.title}
                </h3>
                <h3 className="sub-title">
                    {
                        this.props.subIcon ? <img src={this.props.subIcon} alt=""/> : this.props.subTitle
                    }
                    
                </h3>
                <p className="content">
                    {this.props.content}
                </p>
                <p className="content2">
                    {this.props.content2}
                </p>
                <Link href={this.props.href?`${this.props.href}`:"#"}>
                    <a className="link">
                        {this.props.link}
                    </a>
                </Link>

                <style jsx>{
                    `.card{
                        box-shadow: 0px 0px 0px 0px;
                        outline: transparent;
                        width: 100%; 
                        height: 100%;
                        color: white !important;
                        display: flex;
                        justify-content: center;
                        flex-direction: column;
                        background-position: center !important;
                        background-size: cover !important;
                        height: auto;
                    }

                    .card h3{
                        margin: 0px 0px;
                    }

                    .card    p{
                        // color: white;
                    }
  
                    .card .link{
                        cursor: pointer;
                        width: fit-content;
                        color: #208FFF;
                    }          
                    
                            @media screen and (max-width: 800px){
                                .card {
                                    height: 300px !important;
                                }
                            }
                      `
                }
        

                </style>
            </div>
        )
    }



}

export default Card;