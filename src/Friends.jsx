import { useEffect, useState } from "react"
import Friend from "./Friend";

export default function Friends() {

    const friendsStyle = {
        border: '2px solid green',
        borderRadius: '15px',
        margin: '20px'
    }

    const [friends, setFriends] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setFriends(data));
    }, [])

    return (
        <div style={friendsStyle}>
            <h3>Hello Friends {friends?.length}</h3>
            {
                friends?.map((friend, i) => <Friend key={i} name={friend?.name} email={friend?.email}></Friend>)
            }
        </div>
    )
}