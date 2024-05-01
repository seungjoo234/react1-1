import useUserSatus from "./useUserSatatus";

export default function UserStatus(props) {
    const isOnline = useUserSatus(props.user.id)
    if (isOnline === null) {
        return "대기중..."
    }
    return isOnline ? "온라인" : "오프라인"
}