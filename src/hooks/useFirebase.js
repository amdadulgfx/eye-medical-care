import initAuthentication from "../components/Login/Firebase/firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";

initAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [isLoading, setIsloading] = useState(true)
    const [error, setError] = useState('');
    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();

    //handle google sign in
    const googleSignIn = () => {
        setIsloading(true)
        return signInWithPopup(auth, googleProvider)

    }



    // register new user 
    const registerNewUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                setError('');
                setUserName();
                console.log(user);
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
    //update user profile
    const setUserName = () => {
        updateProfile(auth.currentUser, { displayName: name })
            .then(() => {

            }).catch(error => {

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
                setIsloading(false)
            })

        return () => unsubscribed;
    }, [])

    //handle log out
    const logOut = () => {
        signOut(auth).then(() => {

            setUser({})
        }).finally(() => setIsloading(false));
    }

    return {
        user,
        error,
        googleSignIn,
        logOut,
        registerNewUser,
        setError,
        emailSignIn,
        password,
        setPassword,
        email,
        setEmail,
        name,
        setName,
        isLoading,
        setIsloading
    }
}
export default useFirebase;