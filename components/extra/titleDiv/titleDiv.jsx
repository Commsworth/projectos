import { blueLine } from '../../../static/assets/svgs';

const TitleDiv = (props) => (
    <div>
        <div className={`title-div ${props.position}`}>
            {blueLine}
            <div id="title-text">
                {props.text}
            </div>
        </div>
        <div id="title-subtext">
            {props.subText}
        </div>
        <style jsx>{
            `
    .title-div{
        display: flex;
        justify-content: center;
<<<<<<< HEAD
=======
        color: white !important;
>>>>>>> 05a3c21ce806d04a4f31d7edc3e430b2053e731e
    }
    .left{
        justify-content: flex-start !important;
    }
    #title-text{
<<<<<<< HEAD
=======
        color: white !important;
>>>>>>> 05a3c21ce806d04a4f31d7edc3e430b2053e731e
        margin: 0px 26px;
        font-size: 20px;
        line-height: 119%;
        text-align: center;
        letter-spacing: 0.1em;
<<<<<<< HEAD

    }
    #title-subtext{
=======
        
    }
    #title-subtext{
        color: white !important;
>>>>>>> 05a3c21ce806d04a4f31d7edc3e430b2053e731e
        margin: 10px 26px;
        font-size: 15px;
        line-height: 119%;
        text-align: center;
        letter-spacing: 0.1em;

    }
    `
        }
        </style>
    </div>

)

export default TitleDiv;