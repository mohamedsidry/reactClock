import { createStore } from "redux";
import { TimeReducer } from "../time/reducers/TimeReducer";


const TimeStore = createStore(TimeReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
TimeStore.subscribe(()=>{console.log(TimeStore.getState().time.currentTime)});

export default TimeStore