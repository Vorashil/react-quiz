export default function LoginPage() {
    if (isLoggedIn) {
        return (
            <div className={"flex flex-col items-center"}>
                <div className={"my-2"}>
                    You are Logged in
                </div>
                <div className={"my-2"}>
                    <button className={"border-2 p-2 border-blue-950"}>Log out</button>
                </div>
            </div>
        )
    } else {
        return (
            <div className={"flex flex-col items-center"}>
                <div className={"my-2"}>
                    Please Login
                </div>
                <div className={"my-2"}>
                    <button className={"border-2 p-2 border-blue-950"}>Log in</button>
                </div>
            </div>
        )
    }
}