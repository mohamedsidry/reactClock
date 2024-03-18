import { useEffect, useReducer } from "react"
import { TimeContext } from "../contexts/TimeContext"
import { TimeReducer, TIMEACTION, getCurrentTime } from "../reducers/TimeReducer"

const useTime = ()=>{

    const [state, dispatch] = useReducer(TimeReducer,{time : {currentTime : getCurrentTime()}})

    const initCurrentTime = ()=>{
        dispatch({type: TIMEACTION.init, payload : {value : 199999}})
    }
    

    useEffect(()=>{
        initCurrentTime();
    },[])
    
    return [state, dispatch, TimeContext]
}

export default useTime