import '../styles/globals.css';
import Head from "next/head";
import Script from 'next/script';
import FavIcon from '../assets/favicon.png'


const MyApp = ({Component, pageProps}) => {
    return (
        <>
            <Head>
                <title>Google Map</title>
                <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"/>
                <meta name="description" content="Google Map"/>
                <link rel="shortcut icon" href={FavIcon.src} type="image/png" />
            </Head>
            <Component {...pageProps} />
            <Script
                strategy='beforeInteractive'
                src={`https://maps.googleapis.com/maps/api/js?key=${process.env.MAP_API_KEY}&libraries=places`}
            />
        </>
    )
}

export default MyApp

