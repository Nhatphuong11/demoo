
import * as actionType from "../constant/actionType"

export const act_count_up = (value)=>({
    type:actionType.ACT_UP,
    payload: value
})
export const act_count_down = (value)=>({
    type:actionType.ACT_DOWN,
    payload: value
})
export const act_count_ramdom = (value)=>({
    type:actionType.ACT_RAMDOM,
    payload: value
})