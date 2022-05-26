import React, { useReducer, useContext } from 'react';

import reducer_81 from './reducer_81'
import axios from 'axios'
import { DISPLAY_ALERT, CLEAR_ALERT } from './action_81';

const initialState = {
    isLoading: false,
    showAlert: false,
    alertText: '',
    alertType: '',
    user: '',
    token: '',
}

const AppContext_81 = React.createContext();

const AppProvider_81 = ({ children }) => {

    const [state, dispatch] = useReducer(reducer_81, initialState);

    const displayAlert = () => {
        dispatch({ type: DISPLAY_ALERT });
        clearAlert();
    }
    const clearAlert = () => {
        setTimeout(() => {
            dispatch({ type: CLEAR_ALERT })
        }, 3000);
    }

    const registerUser = async ({ currentUser, endPoint, alertText }) => {
        console.log('registerUser currentUser', currentUser)
        const { data } = await axios.post(`/api/v1/auth_81/${endPoint}`, currentUser);
        console.log('registerUser data', data)
    }

    return (

        <AppContext_81.Provider value={{ ...state, displayAlert, clearAlert, registerUser }}>
            {children}
        </AppContext_81.Provider>

    )

}

const useAppContext = () => {
    return useContext(AppContext_81);
}

export { AppProvider_81, initialState, useAppContext }