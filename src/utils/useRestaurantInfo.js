import { useEffect, useState, } from "react"
import { RESTAURANT_MENU_URL } from "./constants";

const useRestaurantInfo = (resId)=>{
    const [restaurantInfo, setRestaurantInfo] = useState([])
    useEffect(()=>{
        fetchResData()
    })

    const fetchResData = async()=>{
        const data = await fetch(RESTAURANT_MENU_URL + resId)
        const json = await data.json();
        setRestaurantInfo(json); 
    }
    return restaurantInfo
}

export default useRestaurantInfo