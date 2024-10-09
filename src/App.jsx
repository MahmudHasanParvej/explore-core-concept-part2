import './App.css'
import Counter from './Counter';
import Team from './Team';
import User from './Users';
import User1 from './User1';
import Friends from './Friends';
import Friend from './Friend';
// import Nothing from './Nothing';

function App() {
  // function BtnCliked(){alert('btn clicked')}
  const BtnClicked = () => alert('Btn clicked')

  const addToFive = (nam) => {
    alert(nam + 5);
  }

  return (
    <>
      <h3>React Core Concept</h3>
      {/* <Nothing name='Mahmud' age={25}></Nothing> */}
      <Friend></Friend>
      <Friends></Friends>
      <User1></User1>
      <User></User>
      <Team></Team>
      <Counter></Counter>
      <button onClick={BtnClicked}>Btn Cliked</button>
      <button onClick={() => alert('Third Btn Clicked')}>Second Btn Cliked</button>;
      <button onClick={() => addToFive(2)}>Add 5</button>
    </>
  )
}

export default App
