import { useEffect, useState } from "react"

export default function User1() {

    const user1Style1 = {
        border: '2px solid red',
        borderRadius: '15px',
        margin: '20px'
    }

    const [user1, setUser1] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data =>setUser1(data))   
    }, [])

    return (
        <div style={user1Style1}>
            
            <h3>User Name : {user1.length}</h3>
        </div>
    )
}