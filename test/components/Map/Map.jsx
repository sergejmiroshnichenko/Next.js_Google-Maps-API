import {useRef, useCallback} from "react";
import styles from './Map.module.css'
import { GoogleMap, Marker } from '@react-google-maps/api';


const containerStyle = {
    width: '100%',
    height: '100%'
};

const DEFAULT_ZOOM = 10;

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
                zoom={DEFAULT_ZOOM}
                onLoad={onLoad}
                onUnmount={onUnmount}
                options={defaultOptions}
            >
                <Marker position={center} />
            </GoogleMap>
        </div>
    )
}

export default Map