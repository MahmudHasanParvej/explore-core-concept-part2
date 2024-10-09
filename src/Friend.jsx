
import './Friend.css'

export default function Friend({ name , email }) {

// console.log(friend?.name)

    return (
        <div className='Box'>
            <h3>Name : {name}</h3>
            <p>Email : {email}</p>
        </div>
    )
}