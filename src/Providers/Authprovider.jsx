import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile} from "firebase/auth";
import app from '../firebase/firebase.config';



export const AuthContext = createContext();
const auth = getAuth(app);


const Authprovider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    // const googleProvider = new GoogleAuthProvider();

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const updateUserProfile = (displayName, email, photoURL, phoneNumber) => {
        return updateProfile (auth.currentUser, {
            displayName, email, photoURL, phoneNumber,
        })
    }

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    useEffect( () => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            // console.log('current user in auth provider', currentUser);
            setLoading(false);           
        });
        return () => {
            return unsubscribe()
        };
    } , [])

    const AuthInfo = {
        user,
        loading,
        createUser,
        signIn,
        logOut,
        updateUserProfile,
    }

    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default Authprovider;