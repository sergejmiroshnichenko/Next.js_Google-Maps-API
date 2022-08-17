import Map from '../Map/Map'
import {useJsApiLoader} from '@react-google-maps/api'
import Autocomplete from '../../components/Autocomplete/Autocomplete'
import {useCallback, useState} from 'react';



const API_KEY = process.env.MAP_API_KEY

const defaultCenter = {
    lat: 50.4536,
    lng: 30.5164
};

const libraries = ['places']

const Home = ({organizations}) => {

    const [center, setCenter] = useState(defaultCenter);
    const {isLoaded} = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: API_KEY,
        libraries
    })

    const onSelectPlace = useCallback((coordinates) => {
        setCenter(coordinates)
    },[])


    return (
        <>
            {isLoaded && <Map center={defaultCenter}/>}
            { <Autocomplete isLoaded={isLoaded} organizations={organizations} onSelect={onSelectPlace}/>}
        </>
    )
}

export default Home

