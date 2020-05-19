import Layout from '../components/Layout'
import '../scss/explore.scss'
import Head from 'next/head'


class Contact extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }
    componentDidMount() {
        window.scrollTo(0, 0)
    }
    render() {
        return (
            <Layout className="explore">
                <Head>
                      <meta   name="viewport"
      content="width=device-width, initial-scale=1, user-scalable=no"
    />
                </Head>

                <div className="tp">
                    <div className="tp1">
                        <h1>
                            DevOps & Analytics
                        </h1>
                        <p>
                            We are focused on developing data-oriented <br/> applications tailored to solve a vast array of business <br/> requiremenents while giving intuitive insights for <br/> informed business decision making
                        </p>
                    </div>
                    <div className="tp2">
                        <img src="/static/explore-img/big1.svg" alt="" />
                    </div>
                </div>
                <div className="dpn"><img src="/static/scroll.svg" alt="scroll" /></div>

                <div className="crda">
                    <div className="crd1">
                        <h1>
                            Cyber Security
                        </h1>
                        <p>
                        We implement network security solutions designed to <br/>
                         dynamically adapt to the evolving IT infrasture in<br/> 
                         order to defend its rapidly changing attack surface.<br/> 
                         Primary focus is given to the edge of the network as every<br/> 
                         packet must be certified as non-malicious before entry to the network
                        </p>
                        <a href="#"><p>Work with us →</p></a>
                    </div>
                    <div className="crd2">
                        <img src="/static/explore-img/big2.svg" alt="" />
                    </div>
                </div>

                <div className="crdb">
                    <div className="crd2">
                        <img src="/static/explore-img/big3.svg" alt="" />
                    </div>
                    <div className="crd1">

                        <h1>
                            Cyber Security
                        </h1>
                        <p>
                            We implement network security solutions designed to <br/> 
                            dynamically adapt to the evolving IT infrasture in<br/>
                             order to defend its rapidly changing attack surface.<br/>
                              Primary focus is given to the edge of the network as every<br/> 
                              packet must be certified as non-malicious before entry to the network
                        </p>
                        
                        <a href="#"><p>Work with us →</p></a>
                    </div>

                </div>

                <div className="crda">
                    <div className="crd1"> 
                        <h1>App Development</h1>
                    <p>We implement network security solutions designed to <br />
                       dynamically adapt to the evolving IT infrasture in<br />
                       order to defend its rapidly changing attack surface.<br />
                        Primary focus is given to the edge of the network as every<br />
                        packet must be certified as non-malicious before entry to the network
                    </p>
                        <a href="#"><p>Work with us →</p></a>
                    </div>
                    <div className="crd2">
                        <img src="/static/explore-img/big4.svg" alt="" />
                    </div>
                </div>
            </Layout>
        )
    }
}

export default Contact;

 