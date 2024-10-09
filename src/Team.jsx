import { useState } from "react"

export default function Team() {

    const [team, setTeam] = useState(11);

    // const addPlayer = () => {
    //     const updateNumner = team + 1;
    //     setTeam(updateNumner)
    // }

    // const removePlayer = () =>{
    //     const updateNumner = team - 1;
    //     setTeam(updateNumner);
    // }

    const teamStyle = {
        border: '2px solid purple',
        borderRadius: '15px',
        margin: '15px',
        padding: '15px',


    }

    return (
        <div style={teamStyle}>
            <h3>Player : {team}</h3>
            <button onClick={()=>setTeam(team - 1)}>-</button>
            <button onClick={()=>setTeam(team +1)}>+</button>
            {/* <button onClick={removePlayer}>Remove Player</button> */}
            {/* <button onClick={addPlayer}>Add Player</button> */}
        </div>
    )
}