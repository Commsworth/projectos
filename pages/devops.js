import Devops from '../components/subpages/Devops.component';
import Head from 'next/head'
import {withRouter} from 'next/router'
import React from 'react'


const devops = withRouter((props) => {
    return (
        <React.Fragment>
                 <Head>
                <meta name="viewport" content ="width=device-width,initial-scale=1,user-scalable=yes" />
                 {/* <meta name="viewport" content="width=device-width, initial-scale=1.0" /> */}
                </Head>                
                           <Devops  />
            </React.Fragment>
    )
})

export default devops

