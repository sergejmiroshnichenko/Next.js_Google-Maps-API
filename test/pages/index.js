import Home from "../components/Map/Home";
import path from 'path'
import fs from "fs";



const HomePage = ({data}) => {
    console.log(data)
    return <Home/>
}
export default HomePage




export const getServerSideProps = async () => {
    const res = await fetch(`/pages/api/db.json`);
    const data = await res.json();

    return {
        props: {
            data
        }
    }
};



// export const getServerSideProps = async () => {
//     const res = await fetch('/pages/api/db.json');
//     const data = await res.json();
//
//     return { props: { data } };
// };





// export const getStaticProps = async () => {
//     const dataFilePath = path.join(process.cwd(), '/pages/api/db.json');
//     console.log(dataFilePath);
//
//     const fileContents = fs.readFileSync(dataFilePath, "utf8");
//     const data = JSON.parse(fileContents);
//     return { props: { data } };
// };



// export const getServerSideProps = async () => {
//     const res = await fetch('/pages/api/db.json');
//     const data = await res.json();
//
//     return {
//         props: {cities: data}
//     }
// }