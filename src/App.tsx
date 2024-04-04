import React from 'react';
import Greeting from "./Greeting";
import {Route, Routes, BrowserRouter, Link} from 'react-router-dom';
import HomePage from "./pages/HomePage";
import MyPage from "./pages/MyPage";
import LoginPage from "./pages/LoginPage";

export default function App() {

    const NavBarItem = ({name, href}: { name: string, href: string }) => {
        return (
            <li className={"p-2 mx-2 border-2 border-blue-400"}>
                <Link to={href}>
                    {name}
                </Link>
            </li>
        )
    }

    const NavBar = ({children}: { children: React.ReactNode }) => {
        return (
            <div>
                <ul className={"flex flex-row"}>
                    {children}
                </ul>
            </div>
        )

    }

    return (
        <>
            <BrowserRouter>
                <NavBar>
                    <NavBarItem name={"Home"} href={"/"}/>
                    <NavBarItem name={"My Page"} href={"/mypage"}/>
                    <NavBarItem name={"Log in"} href={"/login"}/>
                </NavBar>

                <Routes>
                    <Route path={"/"} element={<HomePage/>}/>
                    <Route path={"/mypage"} element={<MyPage/>}/>
                    <Route path={"/login"} element={<LoginPage/>}/>
                </Routes>
            </BrowserRouter>

            <Greeting name={"oyren.dev"}/>
        </>
    );
}

