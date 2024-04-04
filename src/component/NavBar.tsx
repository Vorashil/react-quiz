import {Link} from "react-router-dom";
import React, {useContext} from "react";
import Greeting from "../Greeting";
import { useAuthenticationContext} from "../context/AuthenticationContext";

const NavBarItem = ({name, href}: { name: string, href: string }) => {
    return (
        <li className={"p-2 mx-2 border-2 border-blue-400"}>
            <Link to={href}>
                {name}
            </Link>
        </li>
    )
}

const NavBarContainer = ({children}: { children: React.ReactNode }) => {
    return (
        <div>
            <ul className={"flex flex-row"}>
                {children}
            </ul>
        </div>
    )

}

export default function NavBar() {
    const {isLoggedIn} = useAuthenticationContext()
    const ConditionalNavbarItems = () => {
        if (isLoggedIn) {
            return (
                <>
                    <NavBarItem name={"My Page"} href={"/mypage"}/>
                    <NavBarItem name={"Logout"} href={"/login"}/>
                </>
            )
        } else {
            return (
                <NavBarItem name={"Login"} href={"/login"}/>
            )
        }
    }

    return (
        <div className={"m-1 border-blue-400 border-2 rounded-b-2xl bg-blue-50 flex justify-between shadow-2xl mb-5"}>
            <Greeting name={"oyren.dev"}/>

            <NavBarContainer>
                <NavBarItem name={"Home"} href={"/"}/>
                <ConditionalNavbarItems/>
            </NavBarContainer>
        </div>
    )
}