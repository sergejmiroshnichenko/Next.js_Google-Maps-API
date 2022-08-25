import Home from "../components/Home/Home";


const HomePage = ({mapApiKey}) => {
    return (
        <Home mapApiKey={mapApiKey}/>
    )
}

export default HomePage


export const getStaticProps = async () => {
    // const res = await fetch(`${process.env.API_HOST}/organizations/`);
    // const organizations = await res.json();

    const API_KEY = process.env.MAP_API_KEY

    return {
        props: {
            // organizations,
            mapApiKey: API_KEY
        },
    }
}
