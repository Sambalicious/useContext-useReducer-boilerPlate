import {useReducer} from 'react';
import authReducer, { initialState } from '../../reducers/Auth';
import { LOG_IN } from '../../Types';


export default () => {
    const [state,dispatch]= useReducer(authReducer, initialState)
    const handleLogin= data => dispatch({type:LOG_IN,payload:data});

return{
    ...state, dispatch, handleLogin
}
}
