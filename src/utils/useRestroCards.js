import { useState, useEffect } from "react";
import { MENU_API } from "./resource";

const useRestroCards = (resId) =>{
    const [restroInfo, setRestroInfo] = useState(null);

    useEffect(()=>{
        fetchRestaurantDetails();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    const fetchRestaurantDetails = async ()=>{
        const data = await fetch(MENU_API + resId);
        const json = await data.json();
        setRestroInfo(json.data);
    }
    return restroInfo;
}

export default useRestroCards;