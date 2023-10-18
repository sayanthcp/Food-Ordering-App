import { createContext, useEffect, useState } from "react";
import axios from 'axios'


export const AllMenuContext = createContext()

export const AllMenu = ({children}) => {
    //state
    const [menu, setMenu] = useState([])

    const url = 'https://www.themealdb.com/api/json/v1/1/search.php?f=c'

    useEffect(()=>{
        axios.get(url).then((res)=>{
            setMenu(res.data?.meals)
        })
    },[])



    return(
        <AllMenuContext.Provider value={menu}>
            {children}
        </AllMenuContext.Provider>
    )
}