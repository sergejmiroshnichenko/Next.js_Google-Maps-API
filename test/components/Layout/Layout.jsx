import Head from 'next/head';
import Script from 'next/script';
import React, {useState, useEffect} from 'react';
import {Bars} from 'react-loader-spinner';



const Layout = ({children, title}) => {

    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);

        const timeout = setTimeout(() => {
            setIsLoading(false)
        }, 3000)

        return () => {
            clearTimeout(timeout)
        }
    }, []);

    return (
        <div>
            <Head>
                <title>{title} | Google Map</title>
                <meta name='description' content='Google Map'/>
                <meta name='theme-color' content='#FF7BA1'/>
            </Head>

            <Script
                strategy='beforeInteractive'
                src={`https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_API_KEY}&libraries=places`}
            />

            <div style={{maxWidth: 1200, margin: '0 auto', position: 'relative', overflow: 'hidden', display:'flex',
                justifyContent: 'center', alignItems: 'center', height: '100vh'
            }}>
                {isLoading ? <Bars color="#00BFFF" height={100} width={100} priority={true} layout='fill'/> : children}
            </div>
        </div>
    )
}

export default Layout






