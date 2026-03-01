import { useQuery } from "@tanstack/react-query"
import axios from "axios"


const URL=import.meta.env.VITE_API_URL;
export const useAuth=()=>{
   
        return useQuery({
            queryKey:["auth"],
            queryFn:async()=>{
                const res=await axios.get(`${URL}/api/user/me`,{withCredentials:true});
                return res.data.statusCode;
            },
            retry:false
        })
}

export const useAdmin=()=>{
    return useQuery({
        queryKey:["admin"],
        queryFn:async()=>{
            const res=await axios.get(`${URL}/api/user/isadmin`,{withCredentials:true});
            console.log(res);
        },
        retry:false
    })
}