import React, { useContext, useEffect, useState } from 'react';

const AppContext = React.createContext();

function AppProvider({ children }) {
    const [isValiduser, setIsvaliduser] = useState(false)
    const [user, setUser] = useState({
        email: '',
        password: ''
    })
    const AuthenticatedUser = {
        email: 'vivek@jeevan.com',
        password: 'ViveK@760'
    }

    const value = {
        user, setUser, AuthenticatedUser, isValiduser, setIsvaliduser
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