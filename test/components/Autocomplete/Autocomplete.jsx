import {useState, useEffect} from 'react';
import PlacesAutocomplete, {
    geocodeByAddress,
    getLatLng,
} from 'react-places-autocomplete';


const Autocomplete = ({onSelect, isLoaded, organizations}) => {

    const [address, setAddress] = useState('');
    const [coordinates, setCoordinates] = useState({
        lat: null, lng: null
    });
    const [currentOrganization, setCurrentOrganization] = useState(organizations);


    useEffect(() => {
        addCoordinatesPlaces()
    }, [])


    const addCoordinatesPlaces = () => {
        Promise.all(
            currentOrganization.map(async (item) => {
                const results = await geocodeByAddress(item.location);
                const latLng = await getLatLng(results[0]);
                return { ...item, coordinates: latLng };
            })
        ).then((localArr) => {
            setCurrentOrganization(localArr);
        });
    };
    console.log('currentOrganization >>>>>>>>>>>', currentOrganization)


    const handleSelect = async (value) => {
        const results = await geocodeByAddress(value);
        const latLng = await getLatLng(results[0]);
        setAddress(value);
        onSelect(latLng)
        setCoordinates(latLng);
    }

    return (
        <PlacesAutocomplete
            value={address}
            onChange={setAddress}
            onSelect={handleSelect}>
            {({getInputProps, suggestions, getSuggestionItemProps}) => (
                <div>
                    <p>Latitude:{coordinates.lat}</p>
                    <p>Longitude:{coordinates.lng}</p>
                    {/*<input {...getInputProps(*/}
                    <ul>
                        {isLoaded && currentOrganization.map(({id, name, location, coordinates}) => {
                            return (
                                <li key={id}><strong>{name}{coordinates}</strong>({location})</li>
                            )
                        })}
                    </ul>

                    {/*)}/>*/}
                    {/*<div>*/}
                    {/*    {suggestions.map((suggestion) => {*/}
                    {/*        const style = {backgroundColor: suggestion.active ? '#41b6e6' : '#fff'}*/}
                    {/*        return (*/}
                    {/*            <div key={suggestion.description} {...getSuggestionItemProps(suggestion, {style})}>*/}
                    {/*                {suggestion.description}*/}
                    {/*            </div>*/}
                    {/*        );*/}
                    {/*    })}*/}
                    {/*</div>*/}
                </div>
            )}
        </PlacesAutocomplete>
    )
}

export default Autocomplete