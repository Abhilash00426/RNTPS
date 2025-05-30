import React, {createContext , useReducer}from "react";

export const AppContext = createContext();
const INITIAL_APP_STATE = {
    isLoggedIn : false 
}

const appStateReducer = (prevState , action) =>{
 const { type , payload} = action ;
 switch(type) {
    case 'SET_IS_LOGIN' : 
    return {...prevState , isLoggedIn : payload}
    default : 
    return prevState; 
 }

}

 export const AppStateProvider = ({children}) => {

 const [appState , appStateDispatch] = useReducer(appStateReducer, INITIAL_APP_STATE )

    return(
        <AppContext.Provider value ={{appState, appStateDispatch}}>
         {children}
        </AppContext.Provider>
    )
}
