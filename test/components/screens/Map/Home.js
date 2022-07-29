import Layout from "../../layout/Layout";
import Map from "./Map";
import {useJsApiLoader} from '@react-google-maps/api';
import {Bars} from 'react-loader-spinner';


const defaultCenter = {
    lat: 50.4536,
    lng: 30.5164
};

const API_KEY = 'AIzaSyBe3CmXgsH_zDtgpMkqNj-lg-AIOtQJtgM';
console.log(API_KEY)

const libraries = ['places']

const Home = () => {


    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: API_KEY,
        libraries
    })

    return (
        <Layout title='Home'>
            {isLoaded ? <Map center={defaultCenter}/> : <Bars color="#00BFFF" height={100} width={100} priority={true} layout='fill'/>}
        </Layout>
    )
}
export default Home


// export async function getServerSideProps(context) {
//     return {
//         props: {
//             API_KEY : process.env.NEXT_APP_API_KEY
//         },
//     }
// }
