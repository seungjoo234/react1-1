import {useState, useEffect} from "react";

export default function useUserStatus(userId) {
    const [isOnline,setIsOnline] = useState(null)

    useEffect(() => {
        function handleStatusChange(status) {
            setIsOnline(status.isOnline)
        }

        ServerAPI.subscribeUserStaus(props.user.id, handleStatusChange)
        return () => {
            ServerAPI.unsubscribeUserStatus(props.user.id, handleStatusChange)
        }
    })
    return isOnline
}