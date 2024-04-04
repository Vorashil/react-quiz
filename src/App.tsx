import React from 'react';
import {Route, Routes, BrowserRouter, Link} from 'react-router-dom';
import HomePage from "./pages/HomePage";
import MyPage from "./pages/MyPage";
import LoginPage from "./pages/LoginPage";
import NavBar from "./component/NavBar";
import {AuthenticationContextProvider} from "./context/AuthenticationContext";

export default function App() {


    return (
        <>
            <AuthenticationContextProvider>
                <BrowserRouter>
                    <NavBar/>
                    <Routes>
                        <Route path={"/"} element={<HomePage/>}/>
                        <Route path={"/mypage"} element={<MyPage/>}/>
                        <Route path={"/login"} element={<LoginPage/>}/>
                    </Routes>
                </BrowserRouter>
            </AuthenticationContextProvider>

        </>
    );
}

