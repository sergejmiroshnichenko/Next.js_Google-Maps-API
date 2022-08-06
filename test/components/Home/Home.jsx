import Map from '../Map/Map'
import {useJsApiLoader} from '@react-google-maps/api'
import Autocomplete from '../../components/Autocomplete/Autocomplete'
import {useCallback, useEffect, useState} from 'react';
import {geocodeByAddress, getLatLng,} from 'react-places-autocomplete';


const API_KEY = process.env.MAP_API_KEY

const defaultCenter = {
    lat: 50.4536,
    lng: 30.5164
};
const libraries = ['places']

const Home = ({organizations}) => {

    const [center, setCenter] = useState(defaultCenter);
    const [currentOrganization, setCurrentOrganization] = useState(organizations);

    useEffect(() => {
        addCoordinatesPlaces()
    }, [])


    const {isLoaded} = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: API_KEY,
        libraries
    })

    const onSelectPlace = useCallback((coordinates) => {
        setCenter(coordinates)
    },[])

    const addCoordinatesPlaces = () => {
        return Promise.all(
            currentOrganization.map(async (item) => {
                const results = await geocodeByAddress(item.location);
                const latLng = await getLatLng(results[0]);
                return { ...item, coordinates: latLng };
            })
        ).then((localArr) => {
           return setCurrentOrganization(localArr);
        });
    };
    console.log('currentOrganization >>>>>>>>>>>', currentOrganization)


    return (
        <>
            {isLoaded && <Map center={center}/>}
            <div>
                <Autocomplete isLoaded={isLoaded} organizations={organizations} onSelect={onSelectPlace}/>
            </div>
            <ul>
                {isLoaded && currentOrganization.map(({id, name, location, coordinates}) => {
                    return (
                        <li key={id}><strong>{name}{coordinates}</strong>({location})</li>
                    )
                })}
            </ul>
        </>
    )
}

export default Home

