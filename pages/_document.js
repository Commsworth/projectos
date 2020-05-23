<<<<<<< HEAD
import Document, {Head, Main, NextScript} from "next/document"

export default class MyDocument extends Document{
=======
import Document, { Head, Main, NextScript } from "next/document"

export default class MyDocument extends Document {
>>>>>>> 05a3c21ce806d04a4f31d7edc3e430b2053e731e
    render() {
        return (
            <html>
                <Head>
<<<<<<< HEAD
                    <title>Commsworth</title>
                     <meta   name="viewport"
      content="width=device-width, initial-scale=1, user-scalable=no"
    />
                    <link rel="stylesheet"
                    href="/_next/static/style.css" />
=======
                    {/* <title>Commsworth</title> */}
                    <meta name="viewport"
                        content="width=device-width, initial-scale=1, user-scalable=no"
                    />
                    <link rel="stylesheet"
                        href="/_next/static/style.css" />
                    <link href="https://fonts.googleapis.com/css2?family=Muli:wght@400;700&display=swap" rel="stylesheet"></link>
>>>>>>> 05a3c21ce806d04a4f31d7edc3e430b2053e731e
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
<<<<<<< HEAD
                <style global jsx>{`
                  @font-face {
    font-family: "Aribau";
    src: url("asset//fonts//Aribau_Regular.otf");
=======

                <style global jsx>{`
    @font-face {
    font-family: "Aribau";
    src: url("scss//fonts//Aribau_Regular.otf");
>>>>>>> 05a3c21ce806d04a4f31d7edc3e430b2053e731e
    }
    html{
        overflow-x: hidden;
    }
html, body{
    /* font-family: 'Times New Roman', Times, serif; */
    margin: 0;
    height: 100%;
    box-sizing: border-box;
    scroll-behavior: smooth;
    background: #111517 !important;
    scroll-behavior: smooth;
}
li{
    list-style-type: none;
    text-decoration: none;
}
a{
    text-decoration: none;
}

.center-text{
    text-align: center;
}

.center-div{
    width: 70vw;
    margin: 0vw 15vw;
}

.space-50{
    height: 50px;
}

/* Colors */

.about-text{
    padding-left: 35px !important;
}

.blue-text{
    color: #0E82F8 !important;
    font-size: 18px;
    font-weight: bold;
}

h1,h2,h3,h4,h5,h6{
    /* margin: 0; */
<<<<<<< HEAD
    color: white;
    font-family: 'Nunito', sans-serif;
    font-weight: 700 !important;
=======
    font-family: 'Nunito', sans-serif;
    /* font-weight: 700 !important; */
>>>>>>> 05a3c21ce806d04a4f31d7edc3e430b2053e731e
    /* font-weight: lighter; */
    /* font-size: 30px; */
    }

    h3{
        font-size: 36px;
    }

a>p{
        color: #0E82F8;
}

a{
    color: #0E82F8;
}

<<<<<<< HEAD
p, li{
    /* font-size: 16px; */
    color: white;
    font-family: 'Aribau';
=======
p, a, li{
    /* font-size: 16px; */
    font-family: 'Muli', sans-serif;
>>>>>>> 05a3c21ce806d04a4f31d7edc3e430b2053e731e
}

.link-text{
    font-weight: bold;
    margin-right: 10px;
    font-size: 24px;
}
                `}</style>
            </html>
        )
    }
}