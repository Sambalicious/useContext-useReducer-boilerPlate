import React, {createContext} from 'react';
import AuthStore from './Auth'

export const StoreContext = createContext();

export const StoreMainProvider = StoreContext.Provider;
export const StoreConsumer = StoreContext.Consumer;


export default ({children}) => {
    const authStore = AuthStore();

    const StoreValue = {
        auth: authStore
    }

return <StoreMainProvider value={StoreValue}>{children}</StoreMainProvider>;
} 
