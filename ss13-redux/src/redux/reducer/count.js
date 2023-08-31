// import su dung
import * as actionType from"../constant/actionType";
// khai bao gia tri khoi tao
const initalState = 0;

const count = (state = initalState, action) =>{
    
    switch (action.type) {
        case actionType.ACT_UP:
            state += action.payload;
            return state;
        case actionType.ACT_DOWN:
            state -= action.payload;
            return state;           
        default:
         break;  
    }
    return state;
    
}

export default count;