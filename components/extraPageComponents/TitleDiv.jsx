const TitleDiv = (props) => (
    <div className="title-div-main">
        <div className={`title-div ${props.position}`}>
            <img src="/static/svg/blue-line.svg" alt="" />
            <div id="title-text">
                {props.top}
            </div>
        </div>
        <div id="title-subtext">
            {props.bottom}
        </div>
        <style jsx>{`
            .title-div-main{
                margin: 49px auto;
            }
            .title-div{
                display: flex;
                justify-content: center;
                color: white !important;
            }
            .left{
                justify-content: flex-start !important;
            }
            #title-text{
                font-family: Nunito;
                font-style: normal;
                font-weight: bold;
                font-size: 20px;
                line-height: 119%;
                /* identical to box height, or 24px */
                text-align: center;
                letter-spacing: 0.1em;

                /* White */
                color: #FFFFFF;
                
            }
            #title-subtext{
            margin: 10px 26px;
            font-family: Muli;
            font-style: normal;
            font-weight: normal;
            font-size: 16px;
            line-height: 119%;
            /* identical to box height, or 19px */
            text-align: center;
            letter-spacing: 0.01em;

            /* Placeholder */
            color: #F4F4F4;
            }
    `}
        </style>
    </div>

)

export default TitleDiv;