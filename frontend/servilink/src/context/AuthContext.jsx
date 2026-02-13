import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const login = (email, password, role = 'customer') => {
        // Mock login logic
        setUser({ email, role, name: 'John User' });
        return true;
    };

    const register = (userData) => {
        // Mock register logic
        setUser({ ...userData, name: userData.name || 'New User' });
        return true;
    };

    const logout = () => {
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, register, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
