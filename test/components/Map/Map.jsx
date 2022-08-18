import {useRef, useCallback, useEffect, useState} from "react";
import styles from './Map.module.css';
import {useJsApiLoader} from '@react-google-maps/api'
import { GoogleMap, Marker } from '@react-google-maps/api';


const defaultCenter = {
    lat: 50.4536,
    lng: 30.5164
};

const libraries = ['places']

const containerStyle = {
    width: '100%',
    height: '100%'
};

const DEFAULT_ZOOM = 13;

const defaultOptions = {
    panControls: true,
    zoomControl: true,
    mapTypeControl: false,
    scaleControl: false,
    streetViewControl: false,
    rotateControl: false,
    clickableIcons: false,
    keyboardShortcuts: false,
    scrollwheel: false,
    fullscreenControl: false,
    disableDoubleClickZoom: true
}

const selectedIconUrl = 'https://maps.google.com/mapfiles/ms/icons/pink-dot.png'
const normalIconUrl = 'https://maps.google.com/mapfiles/ms/icons/blue-dot.png'

const Map = ({mapApiKey, organizations, selectedOrganization}) => {
    const {isLoaded} = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: mapApiKey,
        libraries
    });

    const [center, setCenter] = useState(defaultCenter);

    const mapRef = useRef(undefined)

    const onLoad = useCallback(function callback(map) {
        mapRef.current = map
    }, [])

    const onUnmount = useCallback(function callback(map) {
        mapRef.current = undefined
    }, [])

    useEffect(() => {
        if (selectedOrganization) {
            setCenter(selectedOrganization.coordinates);
        }
    }, [selectedOrganization]);

    if (!isLoaded) {
        return null;
    }

    return(
        <div className={styles.container}>
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={DEFAULT_ZOOM}
                onLoad={onLoad}
                onUnmount={onUnmount}
                options={defaultOptions}
            >
                {organizations.map(({coordinates, id}) => (
                    <Marker
                        key={id}
                        position={coordinates}
                        icon={{
                            url: selectedOrganization && selectedOrganization.id === id
                                ? selectedIconUrl
                                : normalIconUrl
                        }}
                    />
                ))}
            </GoogleMap>
        </div>
    )
}

export default Map