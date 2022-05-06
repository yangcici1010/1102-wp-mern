import React,{useReducer,useContext} from 'react';

import reducer_81 from './reducer_81'

import { DISPLAY_ALERT,CLEAR_ALERT } from './action_81';

const initialState={
    isLoading:false,
    showAlert:false,
    alertText:'',
    alertType:'',

}

const AppContext_81 = React.createContext();

const AppProvider_81= ({children})=>{

    const[state,dispatch]=useReducer(reducer_81,initialState);

    const displayAlert=()=>{
        dispatch({type:DISPLAY_ALERT});
        clearAlert();
    }
    const clearAlert=()=>{
        setTimeout(()=>{
            dispatch({type:CLEAR_ALERT})
        },3000);
    }

    return(
        
        <AppContext_81.Provider value={{...state,displayAlert,clearAlert}}>
        {children}
        </AppContext_81.Provider>

    )

}

const useAppContext=()=>{
    return useContext(AppContext_81);
}

export{AppProvider_81,initialState,useAppContext}