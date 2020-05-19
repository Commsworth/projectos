// import exp from '../../static/assets/png/exp.png'
// import big from '../../static/assets/png/big.png'
// import pig from '../../static/assets/png/pig.png'
// import sup from '../../static/assets/png/sup.png'

export const Why =()=>(

    <div className="center-div">
<h1 className="h1">Why Choose Us?</h1>
<div className="why">
    <div className="why0">
        <div className="why1">
        <div className="bkg"><img src="../../static/assets/png/pig.png" alt="" /></div>
        <div>
            <h4>Affordables Services</h4>
            <p>Lorem ipsum dolor sit arret, consectetur adipiscing elit. Egit <br/>
                scelerisque cursbitur nunc nulla sem. Libero suspendisse.
            </p>
        </div>
        </div>

        <div className="why1">
        <div className="bkg"><img src="../../static/assets/png/sup.png" alt="" /></div>
        <div className="text">
            <h4>Great Support</h4>
            <p>Lorem ipsum dolor sit arret, consectetur adipiscing elit. Egit <br/>
                scelerisque cursbitur nunc nulla sem. Libero suspendisse.
            </p>
        </div>
        </div>

        <div className="why1">
        <div className="bkg"><img src="../../static/assets/png/exp.png" alt="" /></div>
        <div>
            <h4>Experienced Heads</h4>
            <p>Lorem ipsum dolor sit arret, consectetur adipiscing elit. Egit <br/>
                scelerisque cursbitur nunc nulla sem. Libero suspendisse.
            </p>
        </div>
        </div>
    </div>

    <div className="why2">
    <img src="../../static/assets/png/big.png" alt=""/>
    </div>

</div>
<style jsx>{
    `
    .center-div{
        width: 80vw;
        margin: 0vh 10vw;
    }
    .why{
        display: flex;
        grid-template-columns: 40% 40%;
        flex-wrap: wrap;
        justify-content: center;
        /* padding: 2rem; */
        gap: 10%;
        /* margin: 0px 5vw; */
    }
    .why0{
        display: flex;
        flex-direction: column;
        margin: 0vh 2vw;
        /* padding: ; */
    }
    .why1{
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .why1 img{
     margin: 15px 0px 0px 15px;
    }
    .why1 h4{
        font-weight: bold;
        font-size: 24px;
    }
    .why1 p{
     
    }
    .bkg{
        width: 88px;
    height: 88px;
    background-color: #1C2124;;
    margin-right: 20px;
    }
    .h1{
        text-align: center;
        font-weight: bold;
    font-size: 40px;
    color: white;
    }
    .text{
        display: flex;
        flex-direction: column;
    }
    .why2{
        align-self: center;
        margin: 0vh 2vw;

        /* align-self: center; */
        /* width: 400px; */
        /* height: 365px; */
        /* margin:33px 0px 0px 3px; */
    }
    
    @media only screen and (max-width: 570px) {
        .why{
            grid-template-columns: 100%;
        
        }
        .why2 img{
            width: 80vw;
            /* height: 365px; */
            /* margin:33px 0px 0px 3px; */
        }
        .why1 img{
            margin: 15px 15px 0px 15px;
    }
    }
    `
}

</style>
</div>
)