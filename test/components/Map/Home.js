import Layout from "../layout/Layout";
import Map from "./Map";
import {useJsApiLoader} from '@react-google-maps/api';
import {Bars} from 'react-loader-spinner';
import React from "react";


const defaultCenter = {
    lat: 50.4536,
    lng: 30.5164
};
const libraries = ['places']

const Home = ({API_KEY}) => {


    const {isLoaded} = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: API_KEY,
        libraries
    })
    console.log("ключ >>>>>>>>>>>>>>>>>>>>>>>",process.env.NEXT_PUBLIC_API_KEY)

    return (
        <Layout title='Home'>
            {isLoaded ? <Map center={defaultCenter}/> : <Bars color="#00BFFF" height={100} width={100} priority={true} layout='fill'/>}
        </Layout>

    )
}
export default Home

export async function getStaticProps() {
    return {
        props: {
            API_KEY: process.env.NEXT_PUBLIC_API_KEY
        },
    }
}
