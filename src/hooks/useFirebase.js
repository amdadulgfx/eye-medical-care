import initAuthentication from "../components/Login/Firebase/firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";

initAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
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
                // const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage);
            })
    }

    //handle log out
    const logOut = () => {
        signOut(auth).then(() => {

            setUser({})
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
        googleSignIn,
        logOut
    }
}
export default useFirebase;