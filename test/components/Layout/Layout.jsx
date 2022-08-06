import Script from 'next/script';
import {useState, useEffect} from 'react';
import {Bars} from 'react-loader-spinner';
import styles from './Layout.module.css'



const Layout = ({children}) => {

    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);

        const timeout = setTimeout(() => {
            setIsLoading(false)
        }, 3000)

        return () => {
            clearTimeout(timeout)
        }
    }, []);

    return (
        <div>
            <Script
                strategy='beforeInteractive'
                src={`https://maps.googleapis.com/maps/api/js?key=${process.env.MAP_API_KEY}&libraries=places`}
            />
            <div className={styles.wrapper}>
                {isLoading ? <div className={styles.loader}><Bars color="#00BFFF" width={100} priority={true} layout='fill'/></div> : children}
            </div>
        </div>
    )
}

export default Layout







