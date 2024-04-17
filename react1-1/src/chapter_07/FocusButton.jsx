import React, {useRef} from "react"

export default function FocusButton (prop) {
    const inputElem = useRef(null)

    const onButtonClick = () => {
        inputElem.current.focus()
    }
    return (
        <>
            <input ref={inputElem} type="text"/>
            <button onClick={onButtonClick}>Focus the input</button>
        </>
    )
}