import axios from "axios"
// import { GetAsyncData } from "../store/storage";
// import { baseUrl } from "./config";

export const request = async(method, url, data={})=>{
    let token = localStorage.getItem('@token');
    // let Data = "";
    console.log("Request Token", method, process.env.REACT_APP_BASE_URL+url, data)
    // let {token}= JSON.parse(Data);  
    let config = null;
    const headers = {
        "Authorization": token, 
        "Content-Type": "application/json"
    } 
    switch (method.toLowerCase()) {
        case "get":
            config= {
                method: method,
                url: process.env.REACT_APP_BASE_URL+url,
                headers:headers

            }
            break;
        case "upload":
            headers["Content-Type"]='multipart/form-data'
            config= {
                method: 'put',
                url: process.env.REACT_APP_BASE_URL+url,
                data: data,
                headers:headers
            }
            
            break;
        
        default:
            config= {
                method: method,
                url: process.env.REACT_APP_BASE_URL+url,
                data: data,
                headers: headers
            }
            break;
    }
    console.log(method, " : ", config.url)
    console.log("token: ", token)
    const result = await axios(config);
    console.log(result.data);
    return result
    
    // return token
}