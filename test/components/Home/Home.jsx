import Map from '../Map/Map'
import OrganizationsList from '../OrganizationsList'
import {useCallback, useEffect, useState} from 'react';
import {Bars} from 'react-loader-spinner';
import {
    geocodeByAddress,
    getLatLng,
} from 'react-places-autocomplete';


const addCoordinatesPlaces = async (organizations) => {
    const result = [];

    for (let item of organizations) {
        const [address] = await geocodeByAddress(item.location);
        const latLng = await getLatLng(address);

        result.push({
            ...item,
            coordinates: latLng
        });

        await new Promise((resolve) => {
            const timer = setTimeout(() => {
                clearTimeout(timer);
                resolve();
            }, 1000);
        });
    }

    return result;
};


const Home = ({mapApiKey}) => {
    const [isLoad, setIsLoad] = useState(true);
    const [organizations, setOrganizations] = useState([]);
    const [selectedOrganization, setSelectedOrganization] = useState();

    const onSelectPlace = useCallback((id) => {
        const org = organizations.find((item) => item.id === id);
        if (org) {
            setSelectedOrganization(org);
        }
    },[organizations])

    useEffect(() => {
        fetch('/api/organizations')
            .then((res) => res.json())
            .then((data) => addCoordinatesPlaces(data))
            .then((data) => {
                setOrganizations(data);
            })
            .catch(console.error)
            .finally(() => {
                setIsLoad(false);
            });
    }, []);

    if (isLoad) {
        return (
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh'
            }}>
                <Bars
                    color="#00BFFF"
                    width={100}
                    priority={true}
                    layout='fill'
                />
            </div>
        );
    }

    return (
        <>
            <Map
                mapApiKey={mapApiKey}
                organizations={organizations}
                selectedOrganization={selectedOrganization}
            />
            <OrganizationsList
                organizations={organizations}
                onSelect={onSelectPlace}
            />
        </>
    )
}

export default Home

