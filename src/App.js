import React, {useEffect} from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Feed from "./components/Feed/Feed";
import {useDispatch, useSelector} from "react-redux";
import {login, logout, selectUser} from "./features/userSlice";
import Login from "./components/Login/Login"
import {auth} from "./Firebase/firebase";
import Widgets from "./components/Widgets/Widgets";


function App() {
    const user = useSelector(selectUser)
    const dispatch = useDispatch();

    useEffect(() => {
        auth.onAuthStateChanged(userAuth => {
            if (userAuth) {
                //    user is logged in
                dispatch(login({
                    email: userAuth.email,
                    uid: userAuth.uid,
                    displayName: userAuth.displayName,
                    photoURL: userAuth.photoURL,
                }))
            } else {
                //    user is logged out
                dispatch(logout())
            }
        })
    }, []);

    return (
        <div className="app">
            <Header/>

            {!user ? <Login/> : (
                <div className="app__body">
                    <Sidebar/>
                    <Feed/>
                    <Widgets/>
                </div>
            )}
        </div>
    );
}

export default App;
