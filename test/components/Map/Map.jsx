import React, {useRef, useCallback} from "react";
// import GoogleMapReact from 'google-map-react';
import styles from './Map.module.css'
import { GoogleMap, Marker } from '@react-google-maps/api';

const containerStyle = {
    width: '100%',
    height: '100%'
};

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

const Map = ({center}) => {

    const mapRef = useRef(undefined)

    const onLoad = useCallback(function callback(map) {
        mapRef.current = map
    }, [])

    const onUnmount = useCallback(function callback(map) {
        mapRef.current = undefined
    }, [])

    return(
        <div className={styles.container}>
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={10}
                onLoad={onLoad}
                onUnmount={onUnmount}
                options={defaultOptions}
            >
                <Marker position={center} />
            </GoogleMap>
        </div>
        // <div style={{ height: '100vh', width: '100%' }}>
        //     <GoogleMapReact
        //         bootstrapURLKeys={{key : String(process.env.MAP_KEY)}}
        //         defaultCenter={{
        //             lat:50.4536,
        //             lng:30.5164,
        //         }}
        //         defaultZoom={10}
        //         options={{
        //             zoomControl: false,
        //             keyboardShortcuts: false,
        //             fullscreenControl: false,
        //             scrollwheel: false,
        //             clickableIcons: false,
        //         }}
        //     />
        // </div>
    )
}

export default Map