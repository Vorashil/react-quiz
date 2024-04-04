import React from 'react';
import Greeting from "./Greeting";

export default function App() {
    return (
        <>
            <div>
                <ul>
                    <li>Home Page</li>
                    <li>My Page</li>
                    <li>Login</li>
                </ul>
            </div>
            <Greeting name={"oyren.dev"}/>
        </>
    );
}

