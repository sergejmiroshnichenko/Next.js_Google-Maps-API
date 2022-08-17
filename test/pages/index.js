import Home from "../components/Home/Home";


const HomePage = ({ organizations }) => {

    // console.log('organizations >>>>>>>>>', organizations)
    return (
        <Home organizations={organizations}/>
    )
}
export default HomePage


export const getStaticProps = async () => {
    const res = await fetch(`${process.env.API_HOST}/organizations/`);
    const organizations = await res.json();

    if(!organizations){
        return {
            notFound: true,
        }
    }

    return {
        props: { organizations },
    }
}

