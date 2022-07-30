import Head from 'next/head';
import Script from 'next/script';
import React from 'react';
// import {Audio} from 'react-loader-spinner'




// export const getStaticProps = async () => {
//     const res = await fetch('http://localhost:5000/items');
//     const data = await res.json();
//
//     return {
//         props: {cities: data}
//     }
// }


const Layout = ({children, title}) => {
    // console.log(cities)

    // const [isLoading, setIsLoading] = useState(false);
    //
    // useEffect(() => {
    //     setIsLoading(true);
    //
    //     const timeout = setTimeout(() => {
    //         setIsLoading(false)
    //     }, 3000)
    //
    //     return () => {
    //         clearTimeout(timeout)
    //     }
    // }, []);

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

            <div style={{maxWidth: 480, margin: '0 auto', position: 'relative', overflow: 'hidden', display:'flex',
                justifyContent: 'center', alignItems: 'center', height: '100vh'
            }}>
                {/*{isLoading ? <Audio color="#00BFFF" height={100} width={100} priority={true} layout='fill'/> : children}*/}
                {/*{isLoading ? <Loader /> : children}*/}
                {children}
            </div>
        </div>
    )
}

export default Layout

