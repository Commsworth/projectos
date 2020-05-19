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
    }
    .left{
        justify-content: flex-start !important;
    }
    #title-text{
        margin: 0px 26px;
        font-size: 20px;
        line-height: 119%;
        text-align: center;
        letter-spacing: 0.1em;

    }
    #title-subtext{
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