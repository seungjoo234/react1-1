import useUserSatatus from "./useUserSatatus";

export default function UserStatus(props) {
    const isOnline = useUserSatatus(props.user.id)
    return (
        <li style={{color: isOnline ? 'green' : 'black'}}>
            {props.user.name}    
        </li>
    )
}