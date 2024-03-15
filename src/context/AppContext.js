import { createContext, useState } from "react";
import { baseUrl } from "../baseUrl";
import axios from "axios"; 
export const AppContext = createContext();

export default function AppContextProvider({children}){
    const[loading,setLoading] = useState(false)
    const[posts,setPosts] = useState([])
    const [page,setPage] = useState(1)
    const[totalPages,setTotalPages] = useState(null);

    //data filling
    async function fetchData(page = 1){
        setLoading(true);
        let url = `${baseUrl}?page=${page}`;
        try{
            const response = await axios.get(url);
            const data = response.data;
            setPage(data.page);
            setPosts(data.posts)
            setTotalPages(data.totalPages)
            
        }
        catch(error){
            console.log(error);
        }
        setLoading(false);
    }

    function handlePageChange(page){ 
        setPage(page);
        fetchData(page);
    }

    const value={
        posts,setPosts,loading,setLoading,page,setPage,totalPages,setTotalPages,handlePageChange,fetchData
    }
    return <AppContext.Provider value={value}> {children} </AppContext.Provider>
}

