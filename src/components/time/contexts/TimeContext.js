import { createContext } from "react";

const INITCONTEXT  ={time : {currntTime : undefined}} ;
const TimeContext = createContext(INITCONTEXT);

export {TimeContext}