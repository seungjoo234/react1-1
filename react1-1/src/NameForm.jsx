import { useState } from "react";

export default function NameForm() {
    const [value, setValue] = useState('')

    const handleChage = (e) => {
        setValue(e.target.value)
    }
    const handleSubmit = (e) => {
        alert("입력한 이름: " + value)
        e.preventDefault()
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                이름: <input type="text" value={value} onChange={handleChage}/>
            </label>
            <button type="submit">제출</button>
        </form>
    )
}