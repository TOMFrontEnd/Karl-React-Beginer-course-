import { useState } from 'react'

// function App() {
//   const [count, setCount] = useState(0)
//   const [name, setName]=useState("")
//  function minusCount((currentcount)->setCount(currentcount-1));
//  function plusCount((currentcount)->setCount(currentcount+1));
//   return (
//     <div>
//      <label type=input, value=name,onChange(e.targetValue.change)/>>
    
//     <br/>
//  <button type="button" onClick={minusCount}/>- </button> 
//  {count}
//  <button type="button" onClick={plusCount}/>+ </button>  
//  <div> My name is {name} and I am {age} years old </div>
//  </div>
// )

//  }
// export default App
// Its my original work above, there are too many errors
// the below is teacher's work
//const [name, setName] = useState("")
// const [age, setAge] = useState(0)

// return (
//   <div>
//     <input value={name} onChange={e => setName(e.target.value)} />
//     <br />
//     <br />
//     <button onClick={() => setAge(currentAge => currentAge - 1)}>-</button>
//     {age}
//     <button onClick={() => setAge(currentAge => currentAge + 1)}>+</button>
//     <br />
//     <br />
//     My name is {name} and I am {age} years old.
//   </div>
// )
// now I use my way, use function in onClick to change state.
function App(){
const [name,setName]=useState("")
const [age,setAge]=useState(0)
function minusAge() {setAge(currentAge=>currentAge - 1)}
function plusAge() {setAge(currentAge=>currentAge + 1)}
return (
  <div>
  <input value={name} onChange={e=>setName(e.target.value)}/>
  <br/>
  <br/>
  <button onClick={minusAge}>-</button>
  {age}
  <button onClick={plusAge}>+</button>
  <br/>
  <br/>
  my name is {name} and I am {age} old  
  </div>
)
}
export default App
