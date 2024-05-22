import React, { useState } from "react";
import ToolBar from "./ToolBar";

export default function LangdingPage(props) {
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    const onClickLogin = () => {
        setIsLoggedIn(true)
    }

    const onClickLogout = () => {
        setIsLoggedIn(false)
    }

    return (
        <>
            <ToolBar 
                isLoggedIn = {isLoggedIn}
                onClickLogin = {onClickLogin}
                onClickLogout = {onClickLogout}
            />
            <div style={{padding: 10}}>소풀과 함께하는 리액트</div>
        </>
    )
}