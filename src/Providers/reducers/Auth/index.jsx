import { LOG_IN } from "../../Types";

export const initialState = {
    authData: [],
    isLoggedIn: false,
    loading: true
}


 const authReducer = (state, action) => {
    switch (action.type) {
        case LOG_IN : return {
            ...state,
            authData: action.payload,
            isLoggedIn: true,
            loading:false
        }    
        default:return state
    }
}

export default authReducer