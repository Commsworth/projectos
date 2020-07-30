const TitleDiv = (props) => (
    <div>
        <div className={`title-div ${props.position}`}>
            <img src="/static/svg/blue-line.svg" alt=""/>
            <div id="title-text">
                {props.top}
            </div>
        </div>
        <div id="title-subtext">
            {props.bottom}
        </div>
        <style jsx>{`
    .title-div{
        display: flex;
        justify-content: center;
        color: white !important;
    }
    .left{
        justify-content: flex-start !important;
    }
    #title-text{
        font-family: "Nunito", "serif";
        font-weight: bold;
        color: white !important;
        margin: 0px 26px;
        font-size: 20px;
        line-height: 119%;
        text-align: center;
        letter-spacing: 0.1em;
        
    }
    #title-subtext{
        font-family: "Muli", "serif";
        color: white !important;
        margin: 10px 26px;
        font-size: 15px;
        line-height: 119%;
        text-align: center;
        letter-spacing: 0.1em;

    }
    `}
        </style>
    </div>

)

export default TitleDiv;