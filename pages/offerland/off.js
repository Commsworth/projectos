import React, { Component, useEffect, useState } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import ContactForm from '../../components/offerResourcesComponents/ContactForm'
import Socials from '../../components/extraPageComponents/Socials'

const OfferLanding = () => {
    const router = useRouter()
    const { id } = router.query
    const data = [
        { Header: "Digital Experience Monitoring from Dynatrace", content1: [["Optimize user experiences by ensuring every application is available, functional, fast and efficient across web, mobile, and IoT channels.", "text"]], heading: "Learn More" },
        { Header: "Kubernetes Monitoring: Fact Sheet", content1: [["Kubernetes is quickly becoming the default container orchestration engine for the enterprise. Using automation, Kubernetes can manage billions of containers and scale with ease. Shouldn’t your monitoring solution be able to do the same?", "text"]], heading: "Learn More" },
        { Header: "A Guide to Cloud Native Microservices", content1: [["In this guide to cloud native microservices, industry thought leader, The New Stack, explores best practice in building, deploying and managing these scaled-out architectures.", "text"], ["The guide focuses on the human element in all this. The intention is to help readers understand the complexities of shifting DevOps cultures, the people involved and the tools they employ across three key stages:", "text"], [["1. What people need to know when shifting to microservices", "2. Success strategies and practices when deploying microservices", "3. Insights into managing microservices in production"], "list"], ["Download your copy and get expert insight from Dynatrace DevOps activist Andreas Grabner on breaking up your monolith into microservices.", "text"]], heading: "Learn More" },
        { Header: "AIOPs Done Right: eBook", content1: [["As today’s enterprise systems increase in size, the benefits of digitization and cloud computing go hand in hand with technological complexity and operational risks. Download this eBook to see how AI promises to enable autonomous operations, boost innovation, and offer new modes of customer engagement by automating everything", "text"]], heading: "Learn More" },
        { Header: "Five Key Considerations for Enterprise Cloud Monitoring: eBook", content1: [["Software is taking over the world. As a result, every business needs to embrace software as a core competency to ensure survival and prosperity. However, the transformation into a software company is a significant task, as building and running software today is harder than ever. ", "text"], ["This eBook outlines key considerations as you move through the journey to embrace modern software technologies, platforms and elements to truly set up to deliver your business software faster, and with higher quality, in the enterprise cloud. ", "text"]], heading: "Download eBook" },
        { Header: "Life made simpler with Dynatrace, through the eyes of the customer: Video", content1: [["Software is taking over the world. As a result, every business needs to embrace software as a core competency to ensure survival and prosperity. However, the transformation into a software company is a significant task, as building and running software today is harder than ever.", "text"]], heading: "Watch Video" },
    ]
    let [dataID, setDataID] = useState(data.length - 1);
    useEffect(
        () => {
            dataID = window.location.href[window.location.href.length - 1];
            setDataID(dataID)
        }, []
    )
    if(data[dataID]){
        
        return (
            <>
                <Head>
                    <meta charset="UTF-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                </Head>
    
                <main className="dark-bg wrapper">
                    <div className="ct">
                        <div className="ctap-head">
                            <div className="overlay">
                                <div className='container' id="cont-off">
                                    <h1 className="header">{data[dataID].Header}</h1>
                                </div>
                            </div>
                        </div>
                    </div>
    
                    <div style={{ paddingBottom: 200, background: "white" }}>
                        <div className="container" style={{ background: "white" }}>
                            <div className='ct1'>
                                <div className="pad">
                                    <h1>Assess threat to your business</h1>
                                    <div className="pad-flx"> <svg width="32" height="4" viewBox="0 0 32 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M2 2H30" stroke="#076fd9" strokeWidth="4" strokeLinecap="round" />
                                    </svg>
                                    </div>
                                    <div>
                                        {data[dataID].content1.map(cont => {
                                            switch (cont[cont.length - 1]) {
                                                case "text":
                                                    return <p style={{ margin: "20px 0px" }}>{cont[0]}</p>
                                                // break;
                                                case "list":
                                                    return cont[0].map(con => <p style={{ margin: "10px 30px" }}>{con}</p>)
    
                                                default:
                                                    break;
                                            }
                                        })}
                                    </div>
                                    {/* <p>The Cyber Threat Assessment Program (CTAP) is 
                            designed to help you during greenfield and renewal 
                            opportunities to convert prospects and expand your 
                            business by giving customers an in-depth view of the
                            urrent state of their network.</p> <p>After deploying a
                            FortiGate to monitor your network for a short period of
                            time, a report is generated that provides visibility
                            into your network risks, and allows you to position a
                            clear path forward that will quickly gain buy-in from
                              key technical and business decision makers. </p> */}
    
    
    
    
                                </div>
    
                                <div className="pad2">
    
                                    <ContactForm dataID={dataID} heading={data[dataID].heading} />
                                </div>
                            </div>
                        </div>
    
                    </div>
    
                    <Socials />
                    <style jsx>
                        {`
                        .pad-flx {
	 display: flex;
	 align-items: center;
}
 .container {
	 width: 100% !important;
	 margin: 0px auto;
}
.container br{
    background: #111517 !important;
}
 .container #cont-off {
	 background: #111517 !important;
}
 .container .ct1 {
	 display: flex;
	 flex-direction: row;
	 justify-content: center;
	 flex-wrap: wrap;
	 margin: 0 auto;
	 width: 100% !important;
}
 .container .pad {
	 width: 500px;
	 min-width: 400px;
	 align-self: start;
	 justify-content: end;
	 color: white;
	 padding-top: 20px;
	 margin: 25px 50px;
}
 .container .pad h1 {
	 color: black;
	 line-height: 1;
	 font-family: Nunito;
	 font-style: normal;
	 font-weight: bold;
	 font-size: 34px;
}
 .container .pad p {
	 color: black;
	 line-height: 190%;
	 padding-right: 0px;
	 margin-top: 14px !important;
}
 .container .pad2 {
	 padding-top: 20px;
	 margin: 25px 50px;
	 width: 500px !important;
	 min-width: 400px !important;
}
 .container .pad2 h1 {
	 color: black;
	 line-height: 100%;
	 font-family: Nunito;
	 font-style: normal;
	 font-weight: bold;
	 font-size: 34px;
}
 .container .pad2 :global(form .group) {
	 width: 100% !important;
	 min-width: 400px !important;
}
 .container .pad2 :global(form input), .container .pad2 :global(form label), .container .pad2 :global(form select) {
}
 .ct {
	/* contact section */
}
 .ct .ctap-head {
	 margin: 0px;
	 font-weight: 900;
	 font-size: 48px;
	 color: white;
	 background: #242525;
}
 .ct .overlay {
	 position: relative;
	 width: 100%;
	 display: flex;
	 justify-content: start;
	 align-items: center;
	 height: 100%;
	 top: 0;
	 left: 0;
	 right: 0;
	 bottom: 0;
	 background-color: rgba(0, 0, 0, 0.8);
	 z-index: 3;
}
 @media only screen and (min-width: 801px) and (max-width: 1023px) {
	 .container {
		 width: 100%;
	}
	 .container .ct1 {
		 width: 100%;
	}
	 .ct .overlay {
		 width: 100vw !important;
		 margin: auto;
	}
	 .ct .overlay .header {
		 color: white !important;
		 width: 100%;
	}
}
 @media only screen and (min-width: 1024px) {
	 .ct .overlay {
		 margin: auto;
	}
	 .ct .overlay .header {
		 color: white !important;
		 font-size: 48px;
		 width: calc(80% + 50px) !important;
		 margin: 50px auto;
	}
}
 @media only screen and (max-width: 800px) {
	 .container {
		 width: 100%;
	}
	 .container .header {
		 color: white !important;
		 margin: 50px auto !important;
		 width: 90vw !important;
		 font-size: 90% !important;
	}
	 .container .ct1 {
		 flex-direction: column;
		 width: 100%;
	}
	 .container .pad, .container .pad2, .container .pad2 :global(form .group), .container .pad2 h1 {
		 width: 90vw !important;
		 justify-self: start !important;
		 margin: auto;
		 min-width: 200px !important;
	}
    .pad2 :global(form input[type="submit"]){
        width: fit-content !important;
    }
	 .container .overlay {
		 width: 90vw !important;
	}
}
                        `}
                    </style>
                </main>
            </>
        );
    }else{
        return(
            <div>
            <div className="main-div">
            <h1>Offer does not exist!</h1>
            </div>
            <Socials/>
            <style jsx>
            {`
            .main-div{
                background: white;
                min-height: 40vh;
            }
            `}
            </style>
            </div>
        )
    }
};

export default OfferLanding;