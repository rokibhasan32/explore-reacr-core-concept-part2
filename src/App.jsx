
import './App.css'
import Counter from './Counter';
import Friends from './Friends';
import Team from './team';
import Users from './Users';

function App() {
  function handleClick(){
    alert("You clicked the button!");
  }
  const handleClick2 = () =>{
    alert('You click the Button');
  }
  const addToFive = (num) =>{
    alert(num + 5);
  }

  return (
    <>
      <h3>React Core Concepts 2</h3>
      <Friends></Friends>
      <Users></Users>
      <Team></Team>
      <Counter></Counter>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click2</button>
      <button onClick={() =>{alert('Third Click')}}>Third</button>
      <button onClick={() => addToFive(4)}>Four</button>
    </>
  )
}

export default App
