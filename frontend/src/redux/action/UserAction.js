import axios from "axios"
import { GUETUSER } from "../actionType/UserTypes"

export const get_user=()=>async(dispatch)=>{
    try {
        const res=await axios.get("/users/get")
        dispatch({type:GUETUSER,payload:res.data})
    } catch (error) {
        console.log(error)
    }
}

export const add_user=(data)=>async(dispatch)=>{
    try {
        await axios.get("/users",data)
        dispatch(get_user)
    } catch (error) {
        console.log(error)
    }
}