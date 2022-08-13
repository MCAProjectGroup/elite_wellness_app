import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { meteorAsyncCall } from "../service/MetroManager";



export const FetchUserData = createAsyncThunk(
    "auth/FetchUserData",async (_,{rejectWithValue})=>{
        try {
            const res = await meteorAsyncCall("user.fetchdata")
            // console.log("user.fetchdata fulfilled",res)
            console.log("user.fetchdata fulfilled")

            return res            
        } catch (error) {
            console.log("error user.fetchdata", error)
            return rejectWithValue(error)
        }
        
    }


)

const initialState={
    user:null,
    token:"",
    lng:"en",
    interval:null
}

const slice = createSlice(
    {
        name:"auth",
        initialState:initialState,
        reducers:{
            userLoginSuccess:(state, {payload})=>{
                // state.token = "Fake Token"
                // state.user = payload.info
                state.token = payload.token
            },
            userLogoutSuccess:(state)=>{
                
                state.token = "";
                state.user = null
            },
            setLanguage:(state,{payload})=>{
                state.lng = payload
            },
            setCustomInterval:(state,{payload})=>{
                console.log("interval started");
                state.interval = setInterval(() => {
                    console.log("interval runing");
                 payload()   

                },1000*10);
            },
            clearCustomInterval:(state,{payload})=>{
                if(state.interval!==null){
                    console.log("clearing");
                    let temp = state.interval
                    clearInterval(temp)
                    state.interval = null
                    console.log("cleared");

                }
               
            }
        },
        extraReducers:{
            [FetchUserData.fulfilled]:(state,{payload})=>{
                state.user = payload

            }
        }
    }
)


export const {userLoginSuccess, userLogoutSuccess, setLanguage, clearCustomInterval, setCustomInterval} = slice.actions 

export default slice.reducer