// import Nav from '../components/navbar/Navbar';
// import Footer from '../components/footer/Footer';
import '../public/css/global.css'
import Head from 'next/head'
import Socials from '../components/extraPageComponents/Socials'
import Navbar from '../components/extraPageComponents/Navbar'
import Footer from '../components/extraPageComponents/Footer'
import Prismic from 'prismic-javascript';
import { Client } from '../prismic-configuration';

export default function App({ Component, pageProps, footer, navigation, social }) {
    return(
      <div className="main-container">
        {/* <Nav/> */}
        <Head>
        <title>Commsworth</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
        <link href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,400;0,600;0,700;1,400;1,600;1,700&display=swap" rel="stylesheet"></link>
      </Head>

      <Navbar navigation={navigation} />
        <div>
        <Component {...pageProps} />
        </div>
        <Socials social={social} />
        <Footer footer={footer}/>

        <style jsx>
            {`
            @import url('https://fonts.googleapis.com/css2?family=Muli:wght@400;600;700&display=swap');
            .main-container{
              min-height: 100vh;
              display: flex;
              flex-direction: column;
              justify-content: space-between;
              overflow-x: hidden;
            }
            h1,h2,h3,h4,h5,h6{
              font-family: 'Nunito', 'serif';
            }
            p{
              font-family: 'Muli', 'serif';
            }
            `}
        </style>
      </div>
      )
  }

  App.getInitialProps = async () => {
    const navigation = await Client().query(
        Prismic.Predicates.at("document.type", "navigation")
    )

    const footer = await Client().query(
        Prismic.Predicates.at("document.type", "footer")
    )

    const social = await Client().query(
        Prismic.Predicates.at("document.type", "social")
    )

    return {
        navigation: navigation.results[0].data.body[0],
        footer: footer.results[0].data.body,
        social: social.results[0].data.body
    }
}