import React, {useEffect, useState} from "react"

export default function Counter(props) {
    const [count, setCount] = useState(0)
    useEffect(() => {
        document.title = `총 ${count}번 클릭했습니다.`
    })

    const [isOnline, setIsOnline] = useState(null)

    function handleStatusChange(status) {
        setIsOnline(status.setIsOnline)
    }

    useEffect(() => {
        // ServerApi.subscribeUserStatu(props.user.id, handleStatusChange)
        // return () => {
        //     ServerApi.subscribeUserStatu(props.user.id, handleStatusChange)
        // }
    })

    if (isOnline == null) {
        return '대기 중...'
    }
    return isOnline ? '온라인' : '오프라인'
}