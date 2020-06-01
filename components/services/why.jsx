// import exp from 'pngs/exp.png'
// import big from 'pngs/big.png'
// import pig from 'pngs/pig.png'
// import sup from 'pngs/sup.png'

export const Why =()=>(

    <div className="center-div">
<h1 className="h1">Why Choose Us?</h1>
<div className="why">
    <div className="why0">
        <div className="why1">
        <div className="bkg"><img src="pngs/exp.png" alt="" /></div>
        <div>
            <h4>Extensive Competencies</h4>
            <p>Our Multi-faceted management team is powered by top-tier industry experts with 100+ years of experience across various ICT domains.
            </p>
        </div>
        </div>

        <div className="why1">
        <div className="bkg"><img src="pngs/exp.png" alt="" /></div>
        <div className="text">
            <h4>Disruptive Initiatives </h4>
            <p>Commsworth’s expertise delivers game-changing technology initiatives as key business enablers to digitally disrupt industries.
            </p>
        </div>
        </div>

        <div className="why1">
        <div className="bkg"><img src="pngs/sup.png" alt="" /></div>
        <div>
            <h4>Premiere Support</h4>
            <p>Our Multi-faceted management team is powered by top-tier industry experts with 100+ years of experience across various ICT domains.
            </p>
        </div>
        </div>
    </div>

    <div className="why2">
    <img src="pngs/big.png" alt=""/>
    </div>

</div>
<style jsx>{`
    .center-div{
        width: 100vw;
        //padding: 0vh 10vw;
        margin: 0vw;
        background: white;
        padding-top: 46px;
        padding-bottom: 83px;
        padding-left: 10px;
        padding-right: 60px;

    }
    .why{
        background: white;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        /* padding: 2rem; */
        /* margin: 0px 5vw; */
    }
    .why0{
        display: flex;
        flex-direction: column;
        margin: 0vh 26px;

        /* padding: ; */
    }
    .why1{
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .why1 img{
        width: 60%;
        height: 60%;
        margin: 20%;
    }
    .why1 h4{
        font-weight: bold;
        font-size: 24px;
        color: #292929;
        margin: 0;

    }
    .why1 p{
        width: 492px;
        height: 60px;
        font-family: Muli;
        font-style: normal;
        font-weight: normal;
        font-size: 15px;
        line-height: 190%;
        margin: 10px 0px 30px 0px;
        /* or 28px */


        color: #292929;

    }
    .bkg{
     //border-radius: 4px;
        width: 88px;
    height: 88px;
    background-color: #1C2124;;
    margin-right: 32px;
    margin-bottom: 32px;
    }
    .h1{
        text-align: center;
        font-weight: bold;
    font-size: 40px;
    color: #292929;
    }
    .text{
        display: flex;
        flex-direction: column;
    }
    .why2{
        align-self: center;
        margin: 0vh 26px;

        /* align-self: center; */
        /* width: 400px; */
        /* height: 365px; */
        /* margin:33px 0px 0px 3px; */
    }
        .why2 img{
            width: 553px;
            height: 365px;
            /* height: 365px; */
            /* margin:33px 0px 0px 3px; */
        }
    
    @media only screen and (max-width: 570px) {
        .why{
            grid-template-columns: 100%;
        
        }
        .why2 img{
            width: 553px;
            height: 365px;
            /* height: 365px; */
            /* margin:33px 0px 0px 3px; */
        }
        .why1 img{
            margin: 15px 15px 0px 15px;
    }
    }
    `}

</style>
</div>
)