import { useEffect, useState } from "react"
import {
    getAuth, updateProfile, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, createUserWithEmailAndPassword,
    signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut
}
    from "firebase/auth";
import initializeAuthentication from "../Firebase/firebase.init";

//firebase init call
initializeAuthentication();
//user login or not
const useFirebase = () => {
    const [name, setName] = useState('')
    const [user, setUser] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const [isLogin, setIsLogin] = useState(false)
    const [error, setError] = useState('')
    const [passWord, setPassWord] = useState('')
    const [email, setEmail] = useState('')


    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const signInUsingGoogle = () => {
        setIsLoading(true)
        return signInWithPopup(auth, googleProvider)

            .finally(() => setIsLoading(false));
    }
    const toggle = e => {
        setIsLogin(e.target.checked)
    }
    const haldleNameChange = e => {
        setName(e.target.value)
    }
    const handleEmailChange = e => {
        setEmail(e.target.value)
    }

    const handlePassChange = e => {
        setPassWord(e.target.value)
    }
    //logout
    const logOut = () => {
        setIsLoading(true)
        signOut(auth)
            .then(() => {
                setUser({})
            })
            .finally(() => setIsLoading(false))
    }
    useEffect(() => {
        //firebase observer user change or not
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser({})
            }
            setIsLoading(false);
        });
    }, [])

    const handleRegistration = e => {
        e.preventDefault()
        console.log(email, passWord)//page not reload
        if (passWord.length < 6) {
            setError('enter your 6 digit code ')
            return;
        }
        if (!/(?=.*[A-Z].*[A-Z])/.test(passWord)) {
            setError('password must be contain 2 uppercase')
            return;
        }

        isLogin ? processLogin(email, passWord) : registerWithEmail(email, passWord)

    }

    const processLogin = (email, pass) => {
        signInWithEmailAndPassword(auth, email, pass)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
            })

            .catch(error => {
                setError(error.message);
            })
    }

    const registerWithEmail = (email, pass) => {
        createUserWithEmailAndPassword(auth, email, pass)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
                verifyEmail();
                setUserName();
            })

            .catch(error => {
                setError(error.message);
            })
    }

    const setUserName = () => {
        updateProfile(auth.currentUser, { displayName: name })
            .then(result => { })
    }

    const verifyEmail = () => {
        sendEmailVerification(auth.currentUser)
            .then(result => {
                console.log(result)
            })
    }
    const resetPassword = () => {
        sendPasswordResetEmail(auth, email)
            .then(result => {
                console.log(result)
            })
    }

    return {
        user,
        signInUsingGoogle,
        logOut,
        isLoading,
        resetPassword,
        handleRegistration,
        handlePassChange,
        handleEmailChange,
        haldleNameChange,
        toggle,
        error,
        isLogin
    }
}
export default useFirebase;