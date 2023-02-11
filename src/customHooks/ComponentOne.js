// import {useEffect, useState} from 'react';
import useWindowWidth from './useWindowWidth';
export default function ComponentOne(){
    // const [onSmallScreen,setOnSmallScreen] = useState(false);
    
    // const checkScreenSize = () => {
    //     setOnSmallScreen(window.innerWidth < 768);
    // }

    // useEffect(() => {
    //     checkScreenSize();
    //     window.addEventListener('resize',checkScreenSize);

    //     return () => {
    //         window.removeEventListener('resize',checkScreenSize);
    //     }
    // },[]);

    const onSmallScreen =  useWindowWidth();
    return(
        <div>
            <h1>
                You are Browsing on {onSmallScreen ? 'Small' : 'large'} Screen
            </h1>
        </div>
    )
}