import React, { useContext, useEffect, useState } from 'react';

const AppContext = React.createContext();

function AppProvider({ children }) {
    const [user, setUser] = useState({
        email: '',
        password: ''
    })


    const value = {
        user, setUser
    };

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    );
}

const userContext = () => {
    const context = useContext(AppContext);

    if (!context) {
        throw new Error('No Context Provider found!');
    }

    return context;
};

export { userContext, AppProvider };