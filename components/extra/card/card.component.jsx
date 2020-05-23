// import arrow from '../../../asset/svg/arrow.svg';

<<<<<<< HEAD
=======
import Link from "next/link";

>>>>>>> 05a3c21ce806d04a4f31d7edc3e430b2053e731e
class Card extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            link: false,
        }
    }
    render() {
        return (

<<<<<<< HEAD
            <div className="card" style={{width: this.props.width, minWidth: this.props.minWidth, background: `url(${this.props.background})`, backgroundSize: "cover"}}>
                <h3 className="title">
                    {this.props.title}
                </h3>
                <h3>
=======
            <div className="card" style={{ background: `url(${this.props.background})`, backgroundColor:this.props.backcolour, backgroundSize: "cover" }}>
                <h3 className="title">
                    {this.props.title}
                </h3>
                <h3 className="sub-title">
>>>>>>> 05a3c21ce806d04a4f31d7edc3e430b2053e731e
                    {this.props.subTitle}
                </h3>
                <p>
                    {this.props.content}
                </p>
                <p>
                    {this.props.content2}
                </p>
<<<<<<< HEAD
                <a>
                    {this.props.link}
                </a>

                <style jsx global>{
                    `.card{
                        box-shadow: 0px 0px 1px 0px;
=======
                <Link href="#">
                    <h3 className="link">
                        {this.props.link}
                    </h3>
                </Link>

                <style jsx global>{
                    `.card{
                        box-shadow: 0px 0px 0px 0px;
>>>>>>> 05a3c21ce806d04a4f31d7edc3e430b2053e731e
                        outline: transparent;
                        padding: 1vw;
                        width: 100%;
                        height: 100%;
<<<<<<< HEAD
                        color: white;
                        background: transparent;
                        display: flex;
                        // align-content: center;
                        justify-content: center;
                        flex-direction: column;
=======
                        color: white !important;
                        background: transparent;
                        display: flex;
                        align-content: center;
                        background-position: center !important;
                        background-size: cover !important;
>>>>>>> 05a3c21ce806d04a4f31d7edc3e430b2053e731e
                    }

                    .card h3{
                        font-size: 36px;
<<<<<<< HEAD
                        margin: 5px 0px;
=======
                        margin: 0px 0px;
>>>>>>> 05a3c21ce806d04a4f31d7edc3e430b2053e731e
                    }

                    .card    p{
                        // color: white;
                        font-size: 15px;
                    }

                    .card    a{
                        cursor: pointer;
                        text-align: right;
<<<<<<< HEAD
                    }                
=======
                    }  
                    .card .link{
                        cursor: pointer;
                        width: fit-content;
                        color: #208FFF;
                    }              
>>>>>>> 05a3c21ce806d04a4f31d7edc3e430b2053e731e
                      `
                }

                </style>
            </div>
        )
    }



}

export default Card;