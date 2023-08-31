import { addToCart } from "./cartAction";

// b1; khai báo state ban đầu
const initialState = {
    item: [],
}
// b2: Khai báo, reducer , nhận 2 tham số 
// 1: state ban đầu
// 2. là action
const cartReducer = (state = initialState, action) => {
    
    switch (action.type) {
        case "addToCart": 
            const existingproduct = state.item.findIndex((item) => item.id === action.payload.id);
            if (existingproduct !== -1) {
                const updateItem = [...state.item];
                updateItem[existingproduct].quantity += 1;
                return{...state, item: updateItem};
            }else{
                return{...state,item: [...state.item,{...action.payload, quantity:1}]
            }
        }
            
        case "removeItem": 
            return {...state, item: state.item.filter((item) => item.id !== action.payload)}

        case "upQuantity":
            const indexItem = state.item.findIndex((item) => item.id === action.payload);
            const newItem = [...state.item];
            newItem[indexItem].quantity += 1;
            return {...state, item: newItem};
        case "downQuantity":    
            const indexDownItem = state.item.findIndex((item) => item.id === action.payload);
            const newDownItem = [...state.item];
            newDownItem[indexDownItem].quantity -= 1;
            return {...state, item: newDownItem};
        default:
            break;
    }
    return state;
}
export default cartReducer;