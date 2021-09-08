<<<<<<< HEAD
import Devops from '../components/subpages/Devops.component';
import Support from '../components/subpages/Support.component';
import BusinessContinuity from '../components/subpages/BusinessContinuity.component';
import ProductAndDigital from '../components/subpages/ProductAndDigital.component';
import BusinessAutomation from '../components/subpages/BusinessAutomation.component';
import Cybersecurity from '../components/subpages/Cybersecurity.component';
import Infrastructure from '../components/subpages/Infrastructure.component';
=======
import Devops from '../components/servicesSubpageComponent/subpages/Devops.component';
import Support from '../components/servicesSubpageComponent/subpages/Support.component';
import BusinessContinuity from '../components/servicesSubpageComponent/subpages/BusinessContinuity.component';
import ProductAndDigital from '../components/servicesSubpageComponent/subpages/ProductAndDigital.component';
import BusinessAutomation from '../components/servicesSubpageComponent/subpages/BusinessAutomation.component';
import Cybersecurity from '../components/servicesSubpageComponent/subpages/Cybersecurity.component';
import Infrastructure from '../components/servicesSubpageComponent/subpages/Infrastructure.component';
>>>>>>> 68cf0c322d753edae5fea235adf210bef24dc8fd
import Head from 'next/head'
import {withRouter} from 'next/router'
import React from 'react'


const devops = withRouter((props) => {
    return (
        <React.Fragment>
                 <Head>
                <meta name="viewport" content ="width=device-width,initial-scale=1,user-scalable=yes" />
                </Head>                
                        {props.router.query.sublink === '/devops' ? <Devops />: null}   
                        {props.router.query.sublink === '/support' ? <Support />: null}   
                        {props.router.query.sublink === '/business-continuity' ? <BusinessContinuity />: null}   
                        {props.router.query.sublink === '/product-digital' ? <ProductAndDigital />: null}   
                        {props.router.query.sublink === '/business-automation' ? <BusinessAutomation />: null}   
                        {props.router.query.sublink === '/cybersecurity' ? <Cybersecurity />: null}   
                        {props.router.query.sublink === '/infrastructure' ? <Infrastructure />: null}   
            </React.Fragment>
    )
})

<<<<<<< HEAD
export default devops

=======
export default devops
>>>>>>> 68cf0c322d753edae5fea235adf210bef24dc8fd
