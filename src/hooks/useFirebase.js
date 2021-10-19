import initAuthentication from "../components/Login/Firebase/firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";

initAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});

    const [error, setError] = useState('');
    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();

    //handle google sign in
    const googleSignIn = () => {
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                setUser(user)
            })
            .catch(error => {
                const errorMessage = error.message;
                setError(errorMessage)
            })
    }

    //handle log out
    const logOut = () => {
        signOut(auth).then(() => {

            setUser({})
        })
    }

    // register new user 
    const registerNewUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                // console.log(user);
                setError('')
            }).catch(error => {
                setError(error.message)
            })
    }
    // email sign in 
    const emailSignIn = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('')
            })
            .catch(error => {
                setError(error.message)
            })
    }
    //special observer 
    useEffect(() => {
        const unsubscribed =
            onAuthStateChanged(auth, user => {
                if (user) {
                    setUser(user)
                }
                else {
                    setUser({})
                }
            })

        return () => unsubscribed;
    }, [])



    return {
        user,
        error,
        googleSignIn,
        logOut,
        registerNewUser,
        setError,
        emailSignIn
    }
}
export default useFirebase;