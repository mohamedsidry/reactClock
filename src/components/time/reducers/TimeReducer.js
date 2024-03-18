const TIMEACTION = {
    init : 'init',
    update : 'update'
}

const getCurrentTime = (format)=>{
    const date = new Date();
    switch(format){
        case 'h':
            return (`${date.getHours()}`);
        case 'h+m':
            return (`${date.getHours()}:${date.getMinutes()}`);
        case 'h+m+s':
                return (`${date.getHours()}:${date.getMinutes()}`);
        case 'm+s':
            return (`${date.getHours()}:${date.getMinutes()}`);
        default:
            return (`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`)
    }
    
}

const TimeReducer = (state = {time : {currentTime : 0}}, action)=>{
    
    switch(action.type){
        case TIMEACTION.update:
            state.time.currentTime = getCurrentTime();
            return (state)
        case TIMEACTION.init:
            state.time.currentTime = getCurrentTime();
            return (state);
        default:
            return (state)
    }
}


export {TimeReducer, TIMEACTION, getCurrentTime}
